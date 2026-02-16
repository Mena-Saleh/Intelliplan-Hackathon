from fastapi.testclient import TestClient
from backend.main import app
from backend.data.mocked_data import staffing_needs

def test_all_staffing_needs():
    with TestClient(app) as client:
        for need in staffing_needs:
            response = client.post(
                "/recommend/",
                json=need.model_dump(mode="json")
            )

            assert response.status_code == 200, response.text

            data = response.json()

            print("\n" + "=" * 70)
            print(f"STAFFING NEED:")
            print(f"Date        : {need.date}")
            print(f"Start Time  : {need.start_time}")
            print(f"End Time    : {need.end_time}")
            print(f"ID          : {need.id}")
            print(f"Customer ID : {need.customer_id}")
            print(f"Department  : {need.department}")
            print(f"Urgency     : {need.urgency_level}")
            print(f"Required Competences:")
            for comp in need.required_competences:
                print(f"  - {comp}")
            print("=" * 70)

            for i, match in enumerate(data["top_matches"], start=1):
                print(f"\nRank #{i}")
                print(f"Consultant ID : {match['id']}")
                print(f"Rating        : {match['rating']}")
                print(f"Total Score         : {match['total_score']}")
                print(f"Competence Score         : {match['competence_score']}")
                print(f"Experience Score         : {match['experience_score']}")
                print(f"Risk Level    : {match['risk_level']}")
                print(f"Risk Reason   : {match['risk_reason']}")
                print("Competences:")
                for comp in match["competences"]:
                    print(f"  - {comp}")

            assert "staffing_need_id" in data
            assert "top_matches" in data
            assert len(data["top_matches"]) <= 5
