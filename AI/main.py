import mockedData as d
import filtering as f


# Load data
consultants = d.consultants
staffing_need = d.staffing_need1


# Filter by availability
available_consultants = f.filterByAvailability(
    consultants,
    staffing_need
)

# Rank by competence + experience similarity
ranked_results = f.filterByCompetencesAndExperience(
    consultants,
    staffing_need
)

# Print Staffing Request
print("\n" + "=" * 60)
print("STAFFING REQUEST")
print("=" * 60)
print(f"ID: {staffing_need.id}")
print(f"Date: {staffing_need.date}")
print(f"Time: {staffing_need.start_time} - {staffing_need.end_time}")
print(f"Department: {staffing_need.department}")
print(f"Urgency: {staffing_need.urgency_level}")
print("Required Competences:")
for comp in staffing_need.required_competences:
    print(f"  - {comp}")


# Print Top N Matches
print("\n" + "=" * 60)
print("TOP MATCHES")
print("=" * 60)

top = ranked_results[:]

for rank, (consultant, similarity) in enumerate(top, start=1):
    print(f"\nRank #{rank}")
    print(f"Consultant ID: {consultant.id}")
    print(f"Rating: {consultant.rating}")
    print(f"Similarity Score: {similarity:.4f}")
    print("Competences:")
    for comp in consultant.competences:
        print(f"  - {comp}")