from fastapi.testclient import TestClient
from backend.main import app
from backend.data.mocked_data import staffing_needs

def test_all_staffing_needs():
    with TestClient(app) as client:

        for need in staffing_needs[:3]:

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
            print("Required Competences:")
            for comp in need.required_competences:
                print(f"- {comp}")
            print("=" * 70)

            for i, match in enumerate(data["top_matches"], start=1):

                print(f"\nRank #{i}")
                print("Conusltant:")
                consultant = match["consultant"]
                print(f"Consultant id         : {consultant['id']}")
                print(f"Rating             : {consultant['rating']}")
                print("Competences        :")
                for comp in consultant["competences"]:
                    print(f"- {comp}")
                print("Customer Experience:")
                for exp in consultant["customer_experience"]:
                    print(f"- {exp}")
                print(f"Risk Level         : {match['risk_level']}")
                print(f"Risk Reason        : {match['risk_reason']}")




