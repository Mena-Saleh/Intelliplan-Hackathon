import processing as p
from dataModels import (
    Consultant,
    StaffingNeed,
)


def filterByAvailability(consultants : list[Consultant], staffingNeed : StaffingNeed):
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


def filterByCompetencesAndExperience(consultants: list[Consultant], staffingNeed: StaffingNeed):

    ranked = []

    need_text = " ".join(staffingNeed.required_competences)
    need_embedding = p.get_embeddings(need_text)

    for consultant in consultants:

        competence_text = " ".join(consultant.competences)
        competence_embedding = p.get_embeddings(competence_text)

        competence_similarity = p.get_cosine_similarity(
            need_embedding,
            competence_embedding
        )

        experience_text = " ".join(consultant.customer_experience)
        experience_embedding = p.get_embeddings(experience_text)

        experience_similarity = p.get_cosine_similarity(
            need_embedding,
            experience_embedding
        )

        normalized_rating = consultant.rating / 5.0

        final_score = (
            0.65 * competence_similarity +
            0.25 * experience_similarity +
            0.10 * normalized_rating
        )

        ranked.append((consultant, final_score))

    ranked.sort(key=lambda x: x[1], reverse=True)

    return ranked
