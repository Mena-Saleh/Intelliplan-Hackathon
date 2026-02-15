import mockedData as d
import filtering as f


# Load consultants once
consultants = d.consultants

# Collect staffing needs dynamically
staffing_needs = [
    d.staffing_need1,
    d.staffing_need2,
    d.staffing_need3,
    d.staffing_need4,
    d.staffing_need5,
    d.staffing_need6,
    d.staffing_need7,
    d.staffing_need8,
    d.staffing_need9,
    d.staffing_need10,
]

for staffing_need in staffing_needs:

    # Step 1 — Filter by availability
    available_consultants = f.filterByAvailability(
        consultants,
        staffing_need
    )

    # Step 2 — Rank only available consultants
    ranked_results = f.filterByCompetencesAndExperience2(
        consultants,
        staffing_need
    )

    # Print Staffing Request
    print("\n" + "=" * 70)
    print(f"STAFFING REQUEST {staffing_need.id}")
    print("=" * 70)
    print(f"Date: {staffing_need.date}")
    print(f"Time: {staffing_need.start_time} - {staffing_need.end_time}")
    print(f"Department: {staffing_need.department}")
    print(f"Urgency: {staffing_need.urgency_level}")
    print("Required Competences:")
    for comp in staffing_need.required_competences:
        print(f"  - {comp}")

    # Print Top 5 Matches
    print("\nTOP 5 MATCHES")
    print("-" * 70)

    top_5 = ranked_results[:5]

    if not top_5:
        print("No matching consultants available.")
        continue

    for rank, (consultant, similarity) in enumerate(top_5, start=1):
        print(f"\nRank #{rank}")
        print(f"Consultant ID: {consultant.id}")
        print(f"Rating: {consultant.rating}")
        print(f"Similarity Score: {similarity:.4f}")
        print("Competences:")
        for comp in consultant.competences:
            print(f"  - {comp}")
