from fastapi.testclient import TestClient
from backend.main import app
from backend.data.mocked_data import staffing_needs

GROUND_TRUTH_TOP5 = {
    "S1": {"C10", "C1", "C14", "C6", "C20"},
    "S2": {"C9", "C7", "C5", "C3", "C4"},
    "S3": {"C4", "C9", "C3", "C5", "C7"},
    "S4": {"C11", "C26", "C15", "C18", "C22"},
    "S5": {"C12", "C23", "C28", "C19", "C11"},
    "S6": {"C16", "C13", "C22", "C24", "C18"},
    "S7": {"C14", "C6", "C10", "C1", "C30"},
    "S8": {"C27", "C8", "C17", "C25", "C6"},
    "S9": {"C15", "C29", "C26", "C24", "C11"},
    "S10": {"C21", "C19", "C28", "C15", "C26"},
}


def test_all_staffing_needs():

    total_overlap_score = 0
    total = 0

    with TestClient(app) as client:

        for need in staffing_needs:

            response = client.post(
                "/recommend/",
                json=need.model_dump(mode="json")
            )

            assert response.status_code == 200, response.text

            data = response.json()

            print("\n" + "=" * 70)
            print(f"STAFFING NEED: {need.id}")
            print(f"Department  : {need.department}")
            print(f"Urgency     : {need.urgency_level}")
            print("=" * 70)

            predicted_ids = set()

            for i, match in enumerate(data["top_matches"], start=1):

                predicted_ids.add(match["id"])

                print(f"\nRank #{i}")
                print(f"Consultant ID      : {match['id']}")
                print(f"Rating             : {match['rating']}")
                print(f"Total Score        : {match['total_score']}")
                print(f"Competence Score   : {match['competence_score']}")
                print(f"Experience Score   : {match['experience_score']}")
                print(f"Risk Level         : {match['risk_level']}")
                print(f"Risk Reason        : {match['risk_reason']}")

            expected_ids = GROUND_TRUTH_TOP5[need.id]

            intersection = predicted_ids.intersection(expected_ids)
            overlap_score = len(intersection) / 5

            print("\nExpected Top5 :", expected_ids)
            print("Predicted Top5:", predicted_ids)
            print("Correct Matches:", intersection)
            print(f"Top-5 Accuracy for {need.id}: {overlap_score:.2f}")

            total_overlap_score += overlap_score
            total += 1

        average_accuracy = total_overlap_score / total

        print("\n" + "=" * 70)
        print("FINAL EVALUATION")
        print(f"Average Top-5 Accuracy: {average_accuracy * 100:.2f}%")
        print("=" * 70)

        assert average_accuracy >= 0.7
