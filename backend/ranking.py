from embeddings import (get_embeddings, get_cosine_similarity)
from models import (Consultant, StaffingNeed, RiskAssessment)
import numpy as np


def filter_by_availability(consultants : list[Consultant], staffingNeed : StaffingNeed):
    available_consultants = []

    weekday = staffingNeed.date.strftime("%A")

    for consultant in consultants:

        if weekday not in consultant.availability.days:
            continue

        time_slots = consultant.availability.days[weekday]

        for slot in time_slots:
            if slot.start <= staffingNeed.start_time and slot.end >= staffingNeed.end_time:
                available_consultants.append(consultant)
                break

    return available_consultants

def compute_similarities(consultant: Consultant, need_embedding: np.ndarray):
    competence_text = " ".join(consultant.competences)
    competence_embedding = get_embeddings(competence_text)

    competence_similarity = get_cosine_similarity(need_embedding, competence_embedding)

    if consultant.customer_experience:
        experience_text = " ".join(consultant.customer_experience)
        experience_embedding = get_embeddings(experience_text)

        experience_similarity = get_cosine_similarity(need_embedding,experience_embedding)
    else:
        experience_similarity = 0.0

    return competence_similarity, experience_similarity

def compute_score(competence_similarity: float, experience_similarity: float, rating: float | None):
    normalized_rating = (rating / 5.0) if rating else 0.0

    return (
        0.65 * competence_similarity +
        0.25 * experience_similarity +
        0.10 * normalized_rating
    )

def assess_risk(competence_similarity: float, experience_similarity: float):
    if competence_similarity < 0.35:
        return RiskAssessment(
            level="HIGH",
            competence_similarity=competence_similarity,
            experience_similarity=experience_similarity,
            reason="Insufficient competence match"
        )

    if experience_similarity < 0.30:
        return RiskAssessment(
            level="MEDIUM",
            competence_similarity=competence_similarity,
            experience_similarity=experience_similarity,
            reason="Weak or missing relevant customer experience"
        )

    return RiskAssessment(
        level="LOW",
        competence_similarity=competence_similarity,
        experience_similarity=experience_similarity,
        reason="Strong competence and relevant experience"
    )

def get_recommendations(staffing_need: StaffingNeed, consultants: list[Consultant], filter_by_availability=False):
    if filter_by_availability:
        consultants = filter_by_availability(consultants, staffing_need)

    need_text = " ".join(staffing_need.required_competences)
    need_embedding = get_embeddings(need_text)

    results = []

    for consultant in consultants:
        competence_sim, experience_sim = compute_similarities(consultant, need_embedding)
        score = compute_score(competence_sim, experience_sim, consultant.rating)
        risk = assess_risk(competence_sim, experience_sim)

        results.append({
            "id": consultant.id,
            "rating": consultant.rating,
            "score": round(score, 4),
            "risk_level": risk.level,
            "risk_reason": risk.reason,
            "competence_similarity": round(competence_sim, 4),
            "experience_similarity": round(experience_sim, 4),
            "competences": consultant.competences
        })

    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:5]
