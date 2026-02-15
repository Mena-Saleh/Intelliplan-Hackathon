from datetime import date, time
from models import (
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

    Consultant(
    id="C11",
    competences=[
        "Operates counterbalance and reach forklifts in large distribution centers",
        "Handles inbound and outbound pallet movements",
        "Performs cycle counting and stock reconciliation",
        "Maintains safety compliance in high-traffic warehouse zones"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(14, 0))],
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "National retail distribution hub",
        "Third-party logistics warehouse"
    ],
    rating=4.2
),

Consultant(
    id="C12",
    competences=[
        "Last-mile parcel distribution in urban environments",
        "Route optimization using digital navigation tools",
        "Handling high daily delivery volumes",
        "Customer-facing drop-offs and signature verification"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(17, 0))],
            "Thursday": [TimeSlot(start=time(8, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Major e-commerce delivery network"
    ],
    rating=4.5
),

Consultant(
    id="C13",
    competences=[
        "Shelf replenishment in high-traffic grocery stores",
        "Inventory restocking during peak hours",
        "Maintaining organized product displays",
        "Supporting seasonal campaign rollouts"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(14, 0), end=time(22, 0))],
            "Saturday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Regional supermarket chain"
    ],
    rating=3.9
),

Consultant(
    id="C14",
    competences=[
        "Emergency medicine physician in acute care settings",
        "Rapid assessment of trauma patients",
        "Supervision of emergency department teams",
        "Decision-making under critical time pressure"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))],
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Metropolitan emergency hospital"
    ],
    rating=4.9
),

Consultant(
    id="C15",
    competences=[
        "Cold storage goods handling",
        "Temperature-controlled logistics processes",
        "Loading refrigerated transport vehicles",
        "Monitoring compliance with food safety standards"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))],
            "Friday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Food distribution warehouse"
    ],
    rating=4.1
),

Consultant(
    id="C16",
    competences=[
        "Cash register management and POS systems",
        "Handling high customer transaction volumes",
        "Resolving billing discrepancies",
        "Daily cash reconciliation and reporting"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(12, 0), end=time(20, 0))],
            "Wednesday": [TimeSlot(start=time(12, 0), end=time(20, 0))]
        }
    ),
    customer_experience=[
        "Large hypermarket retail chain"
    ],
    rating=4.0
),

Consultant(
    id="C17",
    competences=[
        "General practitioner providing primary healthcare",
        "Diagnosis of common illnesses and chronic conditions",
        "Preventive care and patient consultations",
        "Medical record documentation and follow-up"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Community health clinic"
    ],
    rating=4.7
),

Consultant(
    id="C18",
    competences=[
        "Order picking using handheld scanning devices",
        "Preparing shipment batches for dispatch",
        "Maintaining picking accuracy in high-volume operations",
        "Collaborating with packing and loading teams"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(5, 0), end=time(13, 0))],
            "Wednesday": [TimeSlot(start=time(5, 0), end=time(13, 0))]
        }
    ),
    customer_experience=[
        "E-commerce fulfillment center"
    ],
    rating=4.3
),

Consultant(
    id="C19",
    competences=[
        "Medical transport driver for hospital logistics",
        "Safe handling of sensitive equipment during transit",
        "Strict adherence to delivery schedules",
        "Coordination with clinical staff"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Regional healthcare transport service"
    ],
    rating=4.4
),

Consultant(
    id="C20",
    competences=[
        "Surgical nurse assisting in operating theaters",
        "Sterile field preparation and instrument handling",
        "Monitoring patient vitals during procedures",
        "Post-operative recovery support"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(15, 0))],
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Private surgical clinic"
    ],
    rating=4.8
),

Consultant(
    id="C21",
    competences=[
        "Heavy goods vehicle operation across regional routes",
        "Transporting bulk freight safely",
        "Long-distance logistics planning",
        "Vehicle inspection and maintenance checks"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "National freight transport company"
    ],
    rating=4.5
),

Consultant(
    id="C22",
    competences=[
        "Inventory auditing and discrepancy resolution",
        "Stock tracking through digital systems",
        "Coordinating warehouse restocking schedules",
        "Ensuring compliance with inventory standards"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Retail chain central warehouse"
    ],
    rating=4.2
),

Consultant(
    id="C23",
    competences=[
        "Urban food courier with rapid delivery turnaround",
        "Mobile app-based order management",
        "Customer interaction and issue resolution",
        "Navigating dense city environments efficiently"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(11, 0), end=time(21, 0))]
        }
    ),
    customer_experience=[
        "On-demand food delivery platform"
    ],
    rating=4.1
),

Consultant(
    id="C24",
    competences=[
        "Butchery assistance and meat preparation",
        "Handling fresh produce under hygiene standards",
        "Customer service at specialty food counters",
        "Stock rotation and expiration tracking"
    ],
    availability=Availability(
        days={
            "Saturday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Specialty grocery market"
    ],
    rating=3.8
),

Consultant(
    id="C25",
    competences=[
        "Pediatric healthcare support",
        "Monitoring child patient recovery progress",
        "Communicating with families about treatment plans",
        "Administering prescribed therapies"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Children's hospital ward"
    ],
    rating=4.6
),

Consultant(
    id="C26",
    competences=[
        "Night-shift warehouse supervision",
        "Managing loading dock coordination",
        "Overseeing shift safety compliance",
        "Reporting operational metrics"
    ],
    availability=Availability(
        days={
            "Sunday": [TimeSlot(start=time(22, 0), end=time(6, 0))]
        }
    ),
    customer_experience=[
        "International shipping terminal"
    ],
    rating=4.3
),

Consultant(
    id="C27",
    competences=[
        "Elderly care support worker",
        "Assisting with mobility and daily activities",
        "Medication administration supervision",
        "Providing emotional support to residents"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Long-term residential care home"
    ],
    rating=4.7
),

Consultant(
    id="C28",
    competences=[
        "Fleet coordination for delivery operations",
        "Dispatch planning and driver scheduling",
        "Monitoring route performance metrics",
        "Optimizing logistics efficiency"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Regional parcel distribution center"
    ],
    rating=4.4
),

Consultant(
    id="C29",
    competences=[
        "Warehouse packing specialist",
        "Preparing fragile goods for safe transit",
        "Labeling and shipment documentation",
        "Maintaining packaging material inventory"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Consumer electronics warehouse"
    ],
    rating=4.0
),

Consultant(
    id="C30",
    competences=[
        "Cardiology physician managing complex heart conditions",
        "Interpreting diagnostic imaging results",
        "Coordinating specialized cardiac treatment plans",
        "Supervising clinical care teams"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Cardiac specialty center"
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
        "Senior clinician comfortable managing life-support equipment",
        "Experience working with unstable post-surgical patients",
        "Ability to respond calmly in rapidly deteriorating situations",
        "Familiar with advanced monitoring technologies"
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
        "Engineer experienced in building high-throughput server systems",
        "Designing secure service interfaces for business platforms",
        "Handling concurrent request workflows",
        "Comfortable implementing identity and permission layers"
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
        "Specialist in language-driven AI systems",
        "Experience working with large-scale text understanding models",
        "Building semantic indexing pipelines",
        "Deploying AI capabilities into production environments"
    ],
    customer_id="K3",
    department="AI Research",
    urgency_level="high"
)


customer4 = Customer(
    id="K4",
    name="Nordic Retail Logistics AB",
    required_competences_per_department={
        "Distribution Center": [
            "High-volume goods handling",
            "Material movement coordination",
            "Inventory reliability"
        ]
    },
    preferred_consultants=[]
)

staffing_need4 = StaffingNeed(
    id="S4",
    date=date(2026, 3, 10),
    start_time=time(6, 0),
    end_time=time(14, 0),
    required_competences=[
        "Experience working in large-scale goods terminals",
        "Comfortable operating mechanical lifting equipment",
        "Used to fast-paced loading and unloading processes",
        "Strong focus on workplace safety procedures"
    ],
    customer_id="K4",
    department="Distribution Center",
    urgency_level="medium"
)


customer5 = Customer(
    id="K5",
    name="ScandExpress Parcel Services",
    required_competences_per_department={
        "Last Mile Operations": [
            "Timely parcel distribution",
            "Urban navigation efficiency"
        ]
    },
    preferred_consultants=[]
)

staffing_need5 = StaffingNeed(
    id="S5",
    date=date(2026, 3, 12),
    start_time=time(8, 0),
    end_time=time(17, 0),
    required_competences=[
        "Independent worker managing daily drop schedules",
        "Confident navigating city traffic environments",
        "Handling customer-facing deliveries professionally",
        "Maintaining punctuality under tight timelines"
    ],
    customer_id="K5",
    department="Last Mile Operations",
    urgency_level="high"
)

customer6 = Customer(
    id="K6",
    name="FreshMarket Scandinavia",
    required_competences_per_department={
        "Retail Floor": [
            "Customer engagement",
            "Transaction handling",
            "Store presentation"
        ]
    },
    preferred_consultants=[]
)

staffing_need6 = StaffingNeed(
    id="S6",
    date=date(2026, 3, 14),
    start_time=time(12, 0),
    end_time=time(20, 0),
    required_competences=[
        "Experience assisting customers in busy store environments",
        "Comfortable managing payment systems and cash balancing",
        "Ensuring shelves remain organized and fully stocked",
        "Handling high foot traffic periods calmly"
    ],
    customer_id="K6",
    department="Retail Floor",
    urgency_level="medium"
)


customer7 = Customer(
    id="K7",
    name="Metropolitan Acute Care Hospital",
    required_competences_per_department={
        "Emergency Services": [
            "Rapid clinical decision-making",
            "Acute patient stabilization"
        ]
    },
    preferred_consultants=[]
)

staffing_need7 = StaffingNeed(
    id="S7",
    date=date(2026, 3, 18),
    start_time=time(9, 0),
    end_time=time(17, 0),
    required_competences=[
        "Medical professional experienced in high-pressure treatment settings",
        "Capable of assessing and managing sudden trauma cases",
        "Comfortable supervising junior clinical staff",
        "Strong diagnostic judgement under time constraints"
    ],
    customer_id="K7",
    department="Emergency Services",
    urgency_level="high"
)

customer8 = Customer(
    id="K8",
    name="SilverLife Residential Care",
    required_competences_per_department={
        "Long-Term Care": [
            "Resident support",
            "Daily living assistance"
        ]
    },
    preferred_consultants=[]
)

staffing_need8 = StaffingNeed(
    id="S8",
    date=date(2026, 3, 20),
    start_time=time(8, 0),
    end_time=time(16, 0),
    required_competences=[
        "Experience supporting elderly individuals in residential settings",
        "Assisting with mobility and medication routines",
        "Providing compassionate day-to-day care",
        "Monitoring general wellbeing of residents"
    ],
    customer_id="K8",
    department="Long-Term Care",
    urgency_level="medium"
)

customer9 = Customer(
    id="K9",
    name="Nordic Food Distribution",
    required_competences_per_department={
        "Cold Storage Operations": [
            "Temperature-sensitive goods handling",
            "Warehouse hygiene compliance"
        ]
    },
    preferred_consultants=[]
)

staffing_need9 = StaffingNeed(
    id="S9",
    date=date(2026, 3, 22),
    start_time=time(7, 0),
    end_time=time(15, 0),
    required_competences=[
        "Experience working in refrigerated logistics environments",
        "Handling perishable products carefully",
        "Understanding food safety standards",
        "Comfortable with physically demanding warehouse tasks"
    ],
    customer_id="K9",
    department="Cold Storage Operations",
    urgency_level="medium"
)

customer10 = Customer(
    id="K10",
    name="Scandinavian Freight Network",
    required_competences_per_department={
        "Transport Division": [
            "Heavy vehicle operation",
            "Long-haul logistics"
        ]
    },
    preferred_consultants=[]
)

staffing_need10 = StaffingNeed(
    id="S10",
    date=date(2026, 3, 25),
    start_time=time(6, 0),
    end_time=time(18, 0),
    required_competences=[
        "Licensed driver experienced in transporting large cargo loads",
        "Comfortable planning extended travel routes",
        "Performing vehicle condition inspections",
        "Ensuring regulatory compliance during transport"
    ],
    customer_id="K10",
    department="Transport Division",
    urgency_level="high"
)

