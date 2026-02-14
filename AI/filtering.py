import processing as p
from datetime import datetime


def filterByAvailability(consultants, staffingNeed):
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


def filterByCompetencesAndExperience(consultants, staffingNeed):
    ranked = []

    need_text = " ".join(staffingNeed.required_competences)
    need_embedding = p.get_embeddings(need_text)

    for consultant in consultants:

        consultant_text = " ".join(
            consultant.competences + consultant.customer_experience
        )

        consultant_embedding = p.get_embeddings(consultant_text)

        similarity = p.get_cosine_similarity(
            need_embedding,
            consultant_embedding
        )

        ranked.append((consultant, similarity))

    ranked.sort(key=lambda x: (x[1], x[0].rating), reverse=True)

    return ranked
