from backend.models.domain import RiskAssessment
from backend.services.embedding_service import EmbeddingService


class RankingService:

    def __init__(self, embedding_service: EmbeddingService):
        self.embedding_service = embedding_service

    def filter_by_availability(self, consultants, staffing_need):
        available = []
        weekday = staffing_need.date.strftime("%A")

        for consultant in consultants:
            if weekday not in consultant.availability.days:
                continue

            for slot in consultant.availability.days[weekday]:
                if slot.start <= staffing_need.start_time and slot.end >= staffing_need.end_time:
                    available.append(consultant)
                    break

        return available

    def build_need_text(self, staffing_need):
        parts = [
            f"Department: {staffing_need.department}",
            "Required competences:"
        ]
        parts.extend(staffing_need.required_competences)

        return " ".join(parts)

    def compute_similarities(self, consultant, need_embedding):
        competence_text = " ".join(consultant.competences)
        competence_embedding = self.embedding_service.embed(competence_text)

        competence_similarity = self.embedding_service.cosine_similarity(
            need_embedding, competence_embedding
        )

        if consultant.customer_experience:
            exp_text = " ".join(consultant.customer_experience)
            exp_embedding = self.embedding_service.embed(exp_text)
            experience_similarity = self.embedding_service.cosine_similarity(
                need_embedding, exp_embedding
            )
        else:
            experience_similarity = 0.0

        return competence_similarity, experience_similarity

    def compute_score(self, competence_sim, experience_sim, rating):
        normalized_rating = (rating / 5.0) if rating else 0.0
        return (
            0.55 * competence_sim +
            0.35 * experience_sim +
            0.10 * normalized_rating
        )

    def assess_risk(self, competence_sim, experience_sim, urgency_level):
        delta = 0 if urgency_level == "low" else 0.03 if urgency_level == "medium" else 0.06

        if competence_sim < 0.5 + delta:
            return RiskAssessment(
                level="HIGH",
                competence_similarity=competence_sim,
                experience_similarity=experience_sim,
                reason="Insufficient competence match"
            )

        if experience_sim < 0.4 + delta:
            return RiskAssessment(
                level="MEDIUM",
                competence_similarity=competence_sim,
                experience_similarity=experience_sim,
                reason="Weak or missing relevant experience"
            )

        return RiskAssessment(
            level="LOW",
            competence_similarity=competence_sim,
            experience_similarity=experience_sim,
            reason="Strong competence and relevant experience"
        )

    def get_recommendations(self, staffing_need, consultants, filter_availability=False):
        if filter_availability:
            consultants = self.filter_by_availability(consultants, staffing_need)
            
        # need_text = self.build_need_text(staffing_need)
        # need_embedding = self.embedding_service.embed(need_text)
        need_text = " ".join(staffing_need.required_competences)
        need_embedding = self.embedding_service.embed(need_text)

        results = []

        for consultant in consultants:
            comp_sim, exp_sim = self.compute_similarities(consultant, need_embedding)
            score = self.compute_score(comp_sim, exp_sim, consultant.rating)
            risk = self.assess_risk(comp_sim, exp_sim, staffing_need.urgency_level)

            results.append({
                "id": consultant.id,
                "rating": consultant.rating,
                "competence_score": round(comp_sim, 4),
                "experience_score": round(exp_sim, 4),
                "total_score": round(score, 4),
                "risk_level": risk.level,
                "risk_reason": risk.reason,
                "competences": consultant.competences
            })

        results.sort(key=lambda x: x["total_score"], reverse=True)
        return results[:5]
