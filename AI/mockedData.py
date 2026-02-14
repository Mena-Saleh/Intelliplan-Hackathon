from datetime import date, time
from dataModels import (
    Consultant,
    Availability,
    TimeSlot,
    Customer,
    StaffingNeed,
)

# CONSULTANTS

consultants = [

    Consultant(
        id="C1",
        competences=[
            "Registered Nurse specialized in Intensive Care Unit (ICU)",
            "Critical care management and ventilator handling",
            "Emergency response and trauma stabilization",
            "Advanced cardiac life support (ACLS)"
        ],
        availability=Availability(
            days={
                "Monday": [TimeSlot(start=time(7, 0), end=time(15, 0))],
                "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))],
                "Friday": [TimeSlot(start=time(7, 0), end=time(12, 0))]
            }
        ),
        customer_experience=[
            "Karolinska University Hospital ICU",
            "Regional emergency trauma center"
        ],
        rating=4.8
    ),

    Consultant(
        id="C2",
        competences=[
            "Senior frontend engineer with React and TypeScript",
            "User interface architecture and accessibility optimization",
            "Scalable component design",
            "Web performance tuning and SEO improvements"
        ],
        availability=Availability(
            days={
                "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))],
                "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
            }
        ),
        customer_experience=[
            "Spotify dashboard modernization",
            "Klarna UI redesign"
        ],
        rating=4.4
    ),

    Consultant(
        id="C3",
        competences=[
            "Data engineer building ETL pipelines",
            "Python backend automation",
            "SQL optimization and indexing",
            "Cloud data warehousing"
        ],
        availability=Availability(
            days={
                "Monday": [TimeSlot(start=time(8, 0), end=time(17, 0))],
                "Thursday": [TimeSlot(start=time(8, 0), end=time(17, 0))]
            }
        ),
        customer_experience=[
            "Fintech analytics platform",
            "Retail BI warehouse"
        ],
        rating=4.1
    ),

    Consultant(
        id="C4",
        competences=[
            "Machine learning engineer specializing in NLP",
            "Prompt engineering and LLM applications",
            "Embedding generation and vector search systems",
            "FastAPI deployment of AI services"
        ],
        availability=Availability(
            days={
                "Monday": [TimeSlot(start=time(10, 0), end=time(18, 0))],
                "Friday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
            }
        ),
        customer_experience=[
            "Telecom AI chatbot rollout",
            "Industrial AI proof-of-concept"
        ],
        rating=4.9
    ),

    Consultant(
        id="C5",
        competences=[
            "Full-stack developer using Node.js and React",
            "REST API design and backend integration",
            "AWS cloud deployment",
            "Database schema optimization"
        ],
        availability=Availability(
            days={
                "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
                "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
            }
        ),
        customer_experience=[
            "Healthcare SaaS platform",
            "E-commerce backend modernization"
        ],
        rating=4.3
    ),

    Consultant(
        id="C6",
        competences=[
            "Emergency department nurse",
            "Acute patient triage and stabilization",
            "Pre-hospital assessment experience",
            "Crisis management in high-stress environments"
        ],
        availability=Availability(
            days={
                "Monday": [TimeSlot(start=time(12, 0), end=time(20, 0))],
                "Tuesday": [TimeSlot(start=time(12, 0), end=time(20, 0))]
            }
        ),
        customer_experience=[
            "City emergency ward"
        ],
        rating=4.5
    ),

    Consultant(
        id="C7",
        competences=[
            "DevOps engineer with CI/CD automation",
            "Docker and Kubernetes orchestration",
            "Infrastructure as code using Terraform",
            "Cloud-native deployment pipelines"
        ],
        availability=Availability(
            days={
                "Monday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
                "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
                "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
            }
        ),
        customer_experience=[
            "Fintech DevOps transformation",
            "Cloud migration project"
        ],
        rating=4.6
    ),

    Consultant(
        id="C8",
        competences=[
            "Healthcare assistant in ICU support role",
            "Monitoring vital signs and assisting nurses",
            "Basic life support procedures",
            "Long-term elderly care experience"
        ],
        availability=Availability(
            days={
                "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
                "Saturday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
            }
        ),
        customer_experience=[
            "Elderly care facility",
            "Regional hospital ward"
        ],
        rating=3.8
    ),

    Consultant(
        id="C9",
        competences=[
            "Backend engineer specializing in Python and FastAPI",
            "Async microservice architecture",
            "Database design and API security",
            "Authentication and authorization systems"
        ],
        availability=Availability(
            days={
                "Tuesday": [TimeSlot(start=time(9, 0), end=time(18, 0))],
                "Thursday": [TimeSlot(start=time(9, 0), end=time(18, 0))]
            }
        ),
        customer_experience=[
            "SaaS B2B platform",
            "Logistics automation system"
        ],
        rating=4.2
    ),

    Consultant(
        id="C10",
        competences=[
            "ICU nurse with 10+ years experience in critical care",
            "Ventilator management and post-operative monitoring",
            "Advanced cardiac life support certification",
            "Crisis intervention and emergency stabilization"
        ],
        availability=Availability(
            days={
                "Monday": [TimeSlot(start=time(7, 0), end=time(19, 0))],
                "Wednesday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
            }
        ),
        customer_experience=[
            "University hospital ICU",
            "Cardiac specialty clinic"
        ],
        rating=4.9
    ),
]

# CUSTOMERS AND STAFFING NEEDS

customer1 = Customer(
    id="K1",
    name="Region Stockholm Healthcare Authority",
    required_competences_per_department={
        "ICU": [
            "Registered Nurse",
            "Intensive care experience",
            "Ventilator handling",
            "Critical patient monitoring"
        ],
        "Emergency": [
            "Emergency response",
            "Trauma assessment",
            "Acute stabilization"
        ]
    },
    preferred_consultants=["C1", "C10"]
)

staffing_need1 = StaffingNeed(
    id="S1",
    date=date(2026, 2, 20),
    start_time=time(8, 0),
    end_time=time(16, 0),
    required_competences=[
        "ICU nurse",
        "Experience with ventilators",
        "Critical care background",
        "Emergency stabilization skills"
    ],
    customer_id="K1",
    department="ICU",
    urgency_level="high"
)


customer2 = Customer(
    id="K2",
    name="Nordic Fintech Solutions",
    required_competences_per_department={
        "Platform Engineering": [
            "Backend API development",
            "Python server-side programming",
            "Microservices architecture",
            "Secure authentication systems"
        ],
        "DevOps": [
            "CI/CD automation",
            "Cloud infrastructure management",
            "Container orchestration"
        ]
    },
    preferred_consultants=["C9"]
)

staffing_need2 = StaffingNeed(
    id="S2",
    date=date(2026, 3, 2),
    start_time=time(9, 0),
    end_time=time(17, 0),
    required_competences=[
        "Backend engineer with FastAPI experience",
        "Designing scalable APIs",
        "Knowledge of authentication and authorization",
        "Experience with async Python services"
    ],
    customer_id="K2",
    department="Platform Engineering",
    urgency_level="medium"
)


customer3 = Customer(
    id="K3",
    name="Scandinavian AI Labs",
    required_competences_per_department={
        "AI Research": [
            "Natural language processing",
            "Large language model development",
            "Vector embeddings",
            "Semantic similarity search"
        ]
    },
    preferred_consultants=["C4"]
)

staffing_need3 = StaffingNeed(
    id="S3",
    date=date(2026, 3, 5),
    start_time=time(10, 0),
    end_time=time(18, 0),
    required_competences=[
        "Machine learning engineer with NLP expertise",
        "Experience building LLM-powered applications",
        "Embedding pipelines and semantic retrieval systems",
        "Deployment of AI services using FastAPI"
    ],
    customer_id="K3",
    department="AI Research",
    urgency_level="high"
)
