from datetime import date, time
from backend.models.domain import Consultant, Customer, StaffingNeed, Availability, TimeSlot

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
Consultant(
    id="C31",
    competences=[
        "Cybersecurity analyst specializing in threat detection",
        "SIEM monitoring and incident response",
        "Penetration testing and vulnerability assessment",
        "Network security hardening and firewall configuration"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))],
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Nordic banking cybersecurity operations center",
        "Enterprise network security audit"
    ],
    rating=4.7
),

Consultant(
    id="C32",
    competences=[
        "Construction site supervisor",
        "Large-scale residential building coordination",
        "Workplace safety compliance (OSHA equivalent)",
        "Subcontractor management and scheduling"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(6, 0), end=time(15, 0))],
            "Thursday": [TimeSlot(start=time(6, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Urban apartment development project",
        "Commercial property expansion"
    ],
    rating=4.5
),

Consultant(
    id="C33",
    competences=[
        "HR specialist in recruitment and onboarding",
        "Workforce planning and talent acquisition",
        "Employment law compliance",
        "Performance management frameworks"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
            "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Tech startup scaling recruitment",
        "Retail workforce restructuring"
    ],
    rating=4.4
),

Consultant(
    id="C34",
    competences=[
        "Certified public accountant",
        "Corporate financial reporting and auditing",
        "Tax planning and regulatory compliance",
        "ERP financial systems integration"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))],
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Mid-size manufacturing firm audit",
        "International tax advisory project"
    ],
    rating=4.8
),

Consultant(
    id="C35",
    competences=[
        "Industrial manufacturing technician",
        "CNC machine operation and calibration",
        "Preventive equipment maintenance",
        "Lean production optimization"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(14, 0))],
            "Wednesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Automotive parts factory",
        "Precision tooling manufacturer"
    ],
    rating=4.3
),

Consultant(
    id="C36",
    competences=[
        "Pharmaceutical lab technician",
        "Good Manufacturing Practice (GMP) compliance",
        "Clinical trial sample handling",
        "Quality assurance documentation"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
            "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Biotech drug development lab",
        "Pharmaceutical production facility"
    ],
    rating=4.6
),

Consultant(
    id="C37",
    competences=[
        "Hotel operations manager",
        "Guest experience optimization",
        "Front desk team supervision",
        "Hospitality service quality assurance"
    ],
    availability=Availability(
        days={
            "Saturday": [TimeSlot(start=time(14, 0), end=time(22, 0))],
            "Sunday": [TimeSlot(start=time(14, 0), end=time(22, 0))]
        }
    ),
    customer_experience=[
        "International hotel chain",
        "Luxury resort operations"
    ],
    rating=4.5
),

Consultant(
    id="C38",
    competences=[
        "Aircraft maintenance engineer",
        "Routine aircraft inspection procedures",
        "Aviation safety compliance",
        "Mechanical system diagnostics"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(15, 0))],
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Regional airline maintenance base",
        "Commercial aviation safety audit"
    ],
    rating=4.9
),

Consultant(
    id="C39",
    competences=[
        "Corporate legal advisor",
        "Contract drafting and negotiation",
        "Regulatory compliance analysis",
        "Risk mitigation and dispute resolution"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Cross-border business transactions",
        "Corporate compliance advisory"
    ],
    rating=4.7
),

Consultant(
    id="C40",
    competences=[
        "Telecommunications network engineer",
        "Fiber infrastructure deployment",
        "5G network optimization",
        "Large-scale network troubleshooting"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "National telecom infrastructure rollout",
        "Enterprise data center connectivity"
    ],
    rating=4.6
),
Consultant(
    id="C41",
    competences=[
        "Renewable energy systems engineer",
        "Solar farm installation and commissioning",
        "Grid integration and power optimization",
        "Energy storage system configuration"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(15, 0))],
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Utility-scale solar project",
        "Municipal renewable transition program"
    ],
    rating=4.6
),

Consultant(
    id="C42",
    competences=[
        "Maritime logistics coordinator",
        "Port operations scheduling",
        "Cargo documentation and customs compliance",
        "Vessel loading optimization"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(14, 0))],
            "Friday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "International shipping terminal",
        "Bulk cargo export facility"
    ],
    rating=4.4
),

Consultant(
    id="C43",
    competences=[
        "University lecturer in computer science",
        "Curriculum development for software engineering",
        "Academic research supervision",
        "Assessment and examination design"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(10, 0), end=time(16, 0))],
            "Thursday": [TimeSlot(start=time(10, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Public university faculty",
        "Online engineering education platform"
    ],
    rating=4.8
),

Consultant(
    id="C44",
    competences=[
        "Public sector procurement specialist",
        "Government tender process management",
        "Vendor evaluation and compliance auditing",
        "Contract lifecycle administration"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Municipal procurement office",
        "National infrastructure program"
    ],
    rating=4.5
),

Consultant(
    id="C45",
    competences=[
        "Licensed electrician for commercial installations",
        "High-voltage system maintenance",
        "Industrial wiring and safety inspections",
        "Electrical blueprint interpretation"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(17, 0))],
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Manufacturing plant electrical upgrade",
        "Commercial office building installations"
    ],
    rating=4.7
),

Consultant(
    id="C46",
    competences=[
        "HVAC technician specializing in climate systems",
        "Installation of ventilation and cooling systems",
        "Preventive maintenance for commercial properties",
        "Energy efficiency diagnostics"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
            "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Hospital ventilation system upgrade",
        "Retail mall climate optimization"
    ],
    rating=4.3
),

Consultant(
    id="C47",
    competences=[
        "Biotech research scientist",
        "Molecular assay development",
        "Laboratory data analysis and reporting",
        "Clinical research documentation"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))],
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Pharmaceutical R&D lab",
        "Genomics startup research team"
    ],
    rating=4.9
),

Consultant(
    id="C48",
    competences=[
        "Robotics engineer for industrial automation",
        "PLC programming and system integration",
        "Robotic arm calibration",
        "Manufacturing process optimization"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(8, 0), end=time(16, 0))],
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Automated assembly line deployment",
        "Industrial robotics retrofitting project"
    ],
    rating=4.6
),

Consultant(
    id="C49",
    competences=[
        "Mining operations supervisor",
        "Heavy machinery coordination",
        "Worksite hazard management",
        "Production output monitoring"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(5, 0), end=time(13, 0))]
        }
    ),
    customer_experience=[
        "Open-pit mining operation",
        "Underground mineral extraction site"
    ],
    rating=4.2
),

Consultant(
    id="C50",
    competences=[
        "Video production manager",
        "Live event broadcast coordination",
        "Post-production editing supervision",
        "Studio operations management"
    ],
    availability=Availability(
        days={
            "Saturday": [TimeSlot(start=time(12, 0), end=time(20, 0))]
        }
    ),
    customer_experience=[
        "National television broadcast network",
        "Corporate live-stream production"
    ],
    rating=4.4
),
Consultant(
    id="C51",
    competences=[
        "Investment banking analyst",
        "Financial modeling and valuation",
        "Mergers and acquisitions due diligence",
        "Capital markets advisory"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Nordic investment bank",
        "Cross-border acquisition advisory"
    ],
    rating=4.6
),

Consultant(
    id="C52",
    competences=[
        "Insurance risk assessor",
        "Claims evaluation and fraud detection",
        "Policy underwriting analysis",
        "Regulatory compliance review"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Scandinavian insurance group"
    ],
    rating=4.4
),

Consultant(
    id="C53",
    competences=[
        "Oil and gas drilling engineer",
        "Well integrity management",
        "Offshore platform safety supervision",
        "Hydrocarbon production optimization"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(6, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "North Sea offshore drilling project"
    ],
    rating=4.7
),

Consultant(
    id="C54",
    competences=[
        "Cybersecurity penetration tester",
        "Network vulnerability assessment",
        "Threat modeling and incident response",
        "Secure code review"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))],
            "Friday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Financial institution security audit",
        "Government cyber resilience program"
    ],
    rating=4.9
),

Consultant(
    id="C55",
    competences=[
        "Aerospace systems engineer",
        "Flight control systems integration",
        "Avionics testing and validation",
        "Safety certification compliance"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Commercial aircraft development program"
    ],
    rating=4.8
),

Consultant(
    id="C56",
    competences=[
        "Civil construction site manager",
        "Large-scale infrastructure coordination",
        "Contractor supervision",
        "Site safety and regulatory oversight"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Urban highway expansion project"
    ],
    rating=4.5
),

Consultant(
    id="C57",
    competences=[
        "Pharmaceutical QA specialist",
        "GMP compliance auditing",
        "Batch record review",
        "Laboratory quality assurance"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Biopharmaceutical production facility"
    ],
    rating=4.7
),

Consultant(
    id="C58",
    competences=[
        "Supply chain analytics expert",
        "Demand forecasting models",
        "Inventory optimization strategies",
        "Logistics cost reduction analysis"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Global retail supply network"
    ],
    rating=4.6
),

Consultant(
    id="C59",
    competences=[
        "Telecommunications network engineer",
        "5G infrastructure deployment",
        "Fiber optic installation planning",
        "Network performance monitoring"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "National telecom operator"
    ],
    rating=4.5
),

Consultant(
    id="C60",
    competences=[
        "Agricultural technology specialist",
        "Precision farming systems",
        "Drone-based crop monitoring",
        "Soil data analytics"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Smart farming cooperative"
    ],
    rating=4.3
),

Consultant(
    id="C61",
    competences=[
        "Corporate legal compliance officer",
        "Regulatory framework interpretation",
        "Internal audit coordination",
        "Corporate governance advisory"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Publicly listed enterprise compliance division"
    ],
    rating=4.8
),

Consultant(
    id="C62",
    competences=[
        "UX research specialist",
        "User interview design",
        "Behavioral analytics interpretation",
        "Usability testing facilitation"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Fintech mobile app redesign"
    ],
    rating=4.6
),

Consultant(
    id="C63",
    competences=[
        "Manufacturing quality inspector",
        "ISO 9001 compliance checks",
        "Production defect analysis",
        "Root cause corrective action processes"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Automotive assembly plant"
    ],
    rating=4.4
),

Consultant(
    id="C64",
    competences=[
        "Rail operations controller",
        "Train scheduling optimization",
        "Safety incident coordination",
        "Rail network performance monitoring"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "National railway authority"
    ],
    rating=4.5
),

Consultant(
    id="C65",
    competences=[
        "Water treatment plant operator",
        "Chemical dosing calibration",
        "Environmental compliance monitoring",
        "Municipal water system maintenance"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Regional wastewater facility"
    ],
    rating=4.3
),

Consultant(
    id="C66",
    competences=[
        "Defense logistics coordinator",
        "Military supply chain planning",
        "Secure transport scheduling",
        "Operational readiness support"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "National defense procurement office"
    ],
    rating=4.7
),

Consultant(
    id="C67",
    competences=[
        "Data governance specialist",
        "Master data management strategy",
        "Data privacy compliance (GDPR)",
        "Enterprise data quality auditing"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "International financial services firm"
    ],
    rating=4.8
),

Consultant(
    id="C68",
    competences=[
        "Cloud solutions architect",
        "Multi-region infrastructure design",
        "Cost optimization in AWS and Azure",
        "High availability system architecture"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Global SaaS provider"
    ],
    rating=4.9
),

Consultant(
    id="C69",
    competences=[
        "Hospitality operations manager",
        "Front desk and guest service coordination",
        "Revenue management optimization",
        "Event and banquet logistics"
    ],
    availability=Availability(
        days={
            "Saturday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Luxury hotel chain"
    ],
    rating=4.2
),

Consultant(
    id="C70",
    competences=[
        "Sports performance physiologist",
        "Athlete conditioning program design",
        "Injury prevention assessment",
        "Biomechanical performance analysis"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Professional football club"
    ],
    rating=4.6
),
Consultant(
    id="C71",
    competences=[
        "Quantum computing algorithm research",
        "Qubit error correction techniques",
        "Quantum circuit simulation",
        "Hybrid quantum-classical optimization models"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "University quantum lab",
        "Quantum hardware startup"
    ],
    rating=4.8
),

Consultant(
    id="C72",
    competences=[
        "Nuclear plant safety engineering",
        "Reactor core monitoring systems",
        "Radiation risk mitigation",
        "Emergency containment procedures"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "National nuclear facility"
    ],
    rating=4.9
),

Consultant(
    id="C73",
    competences=[
        "Cyber threat intelligence analysis",
        "Dark web monitoring",
        "Nation-state attack pattern detection",
        "Security operations center coordination"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Government cyber defense unit"
    ],
    rating=4.7
),

Consultant(
    id="C74",
    competences=[
        "Deep sea robotics engineering",
        "Underwater navigation systems",
        "Remotely operated vehicle control",
        "Marine pressure-resistant hardware design"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Offshore exploration project"
    ],
    rating=4.6
),

Consultant(
    id="C75",
    competences=[
        "AI hardware accelerator design",
        "Chip architecture for neural networks",
        "Low-latency inference optimization",
        "FPGA-based machine learning systems"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Semiconductor AI lab"
    ],
    rating=4.8
),

Consultant(
    id="C76",
    competences=[
        "Space mission operations planning",
        "Satellite launch coordination",
        "Orbital trajectory modeling",
        "Spacecraft systems integration"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "European space research initiative"
    ],
    rating=4.9
),

Consultant(
    id="C77",
    competences=[
        "Disaster relief logistics coordination",
        "Rapid deployment resource planning",
        "Humanitarian supply chain management",
        "Crisis communication operations"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "International disaster response organization"
    ],
    rating=4.6
),

Consultant(
    id="C78",
    competences=[
        "Autonomous vehicle systems engineering",
        "Sensor fusion algorithms",
        "Lidar and radar data processing",
        "Real-time control software design"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Self-driving mobility startup"
    ],
    rating=4.7
),

Consultant(
    id="C79",
    competences=[
        "Forensic accounting investigations",
        "Financial fraud analysis",
        "Asset tracing methodologies",
        "Court-ready financial reporting"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "International audit firm"
    ],
    rating=4.5
),

Consultant(
    id="C80",
    competences=[
        "Bioinformatics pipeline engineering",
        "Genomic sequence analysis",
        "High-throughput data processing",
        "Clinical research data modeling"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Medical genomics laboratory"
    ],
    rating=4.8
),

Consultant(
    id="C81",
    competences=[
        "Renewable energy grid integration",
        "Wind farm performance optimization",
        "Solar plant system diagnostics",
        "Energy storage modeling"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Nordic renewable energy provider"
    ],
    rating=4.6
),

Consultant(
    id="C82",
    competences=[
        "Oil refinery process optimization",
        "Petrochemical system modeling",
        "Industrial plant safety auditing",
        "Hazardous material handling procedures"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "International oil refinery"
    ],
    rating=4.7
),

Consultant(
    id="C83",
    competences=[
        "Blockchain smart contract development",
        "Distributed ledger architecture",
        "Cryptographic protocol implementation",
        "Decentralized finance applications"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Web3 fintech platform"
    ],
    rating=4.5
),

Consultant(
    id="C84",
    competences=[
        "Robotic process automation specialist",
        "Enterprise workflow automation",
        "Business rule engine configuration",
        "Process efficiency analytics"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Global enterprise automation rollout"
    ],
    rating=4.4
),

Consultant(
    id="C85",
    competences=[
        "Clinical psychologist specializing in trauma",
        "Crisis counseling interventions",
        "Cognitive behavioral therapy planning",
        "Mental health risk assessments"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Urban mental health clinic"
    ],
    rating=4.8
),

Consultant(
    id="C86",
    competences=[
        "Maritime navigation officer",
        "Commercial shipping route management",
        "Harbor docking supervision",
        "International maritime safety compliance"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Global cargo shipping company"
    ],
    rating=4.5
),

Consultant(
    id="C87",
    competences=[
        "High-voltage electrical systems engineer",
        "Substation design and maintenance",
        "Power distribution network diagnostics",
        "Electrical safety compliance auditing"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "National power grid operator"
    ],
    rating=4.7
),

Consultant(
    id="C88",
    competences=[
        "Environmental impact assessment specialist",
        "Sustainability reporting",
        "Carbon footprint analysis",
        "Regulatory environmental compliance"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Infrastructure development firm"
    ],
    rating=4.6
),

Consultant(
    id="C89",
    competences=[
        "Robotics hardware prototyping",
        "Embedded systems firmware development",
        "Motor control algorithm design",
        "Sensor integration and calibration"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Industrial robotics manufacturer"
    ],
    rating=4.7
),

Consultant(
    id="C90",
    competences=[
        "Professional sports team physiotherapist",
        "Injury rehabilitation programs",
        "Performance mobility assessments",
        "Athlete recovery protocol design"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Elite professional basketball club"
    ],
    rating=4.6
),
Consultant(
    id="C91",
    competences=[
        "Cloud security architecture",
        "Zero-trust network implementation",
        "Identity federation systems",
        "Enterprise IAM governance"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Global SaaS enterprise"
    ],
    rating=4.8
),

Consultant(
    id="C92",
    competences=[
        "Junior warehouse associate",
        "Basic pallet handling",
        "Stock labeling and scanning",
        "Manual inventory counting"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Regional fulfillment center"
    ],
    rating=3.5
),

Consultant(
    id="C93",
    competences=[
        "Senior ICU physician",
        "Advanced ventilator optimization",
        "Complex multi-organ failure management",
        "Clinical supervision of ICU teams"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
        }
    ),
    customer_experience=[
        "University trauma hospital"
    ],
    rating=4.9
),

Consultant(
    id="C94",
    competences=[
        "Edge AI deployment engineering",
        "Low-power model compression",
        "Embedded neural inference",
        "Real-time analytics systems"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Industrial IoT company"
    ],
    rating=4.6
),

Consultant(
    id="C95",
    competences=[
        "Restaurant operations management",
        "High-volume service coordination",
        "POS systems supervision",
        "Customer complaint resolution"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(14, 0), end=time(22, 0))]
        }
    ),
    customer_experience=[
        "International restaurant chain"
    ],
    rating=4.3
),

Consultant(
    id="C96",
    competences=[
        "Heavy machinery maintenance technician",
        "Hydraulic system diagnostics",
        "Industrial equipment repair",
        "Preventive maintenance scheduling"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Manufacturing plant"
    ],
    rating=4.5
),

Consultant(
    id="C97",
    competences=[
        "Advanced prompt engineering",
        "LLM fine-tuning strategies",
        "Retrieval-augmented generation systems",
        "Evaluation of AI model performance"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "AI product startup"
    ],
    rating=4.7
),

Consultant(
    id="C98",
    competences=[
        "Airport ground logistics coordination",
        "Aircraft cargo loading supervision",
        "Airside safety compliance",
        "Time-critical turnaround operations"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(5, 0), end=time(13, 0))]
        }
    ),
    customer_experience=[
        "International airport operations"
    ],
    rating=4.4
),

Consultant(
    id="C99",
    competences=[
        "Senior data scientist",
        "Predictive modeling pipelines",
        "Time-series forecasting",
        "Large-scale feature engineering"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Fintech analytics platform"
    ],
    rating=4.8
),

Consultant(
    id="C100",
    competences=[
        "Primary school educator",
        "Curriculum development",
        "Child behavioral management",
        "Parent-teacher communication"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(8, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Public elementary school"
    ],
    rating=4.2
),

Consultant(
    id="C101",
    competences=[
        "Cardiac surgery assistant",
        "Operating room sterile procedures",
        "Cardiovascular patient monitoring",
        "Post-operative cardiac recovery support"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Heart surgery specialty hospital"
    ],
    rating=4.8
),

Consultant(
    id="C102",
    competences=[
        "Cybersecurity penetration testing",
        "Vulnerability scanning tools",
        "Red team simulation exercises",
        "Security incident documentation"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Enterprise security consultancy"
    ],
    rating=4.6
),

Consultant(
    id="C103",
    competences=[
        "Pharmaceutical production oversight",
        "GMP compliance auditing",
        "Sterile manufacturing process control",
        "Quality assurance documentation"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Medical drug manufacturer"
    ],
    rating=4.7
),

Consultant(
    id="C104",
    competences=[
        "Senior DevOps architect",
        "Multi-region cloud deployment",
        "High-availability infrastructure design",
        "Disaster recovery planning"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(8, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Global SaaS infrastructure"
    ],
    rating=4.9
),

Consultant(
    id="C105",
    competences=[
        "Urban traffic systems engineering",
        "Smart city sensor deployment",
        "Transportation data modeling",
        "Real-time congestion monitoring"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Municipal infrastructure project"
    ],
    rating=4.5
),

Consultant(
    id="C106",
    competences=[
        "Intensive pediatric nurse",
        "Neonatal monitoring systems",
        "Critical infant stabilization",
        "Family-centered patient communication"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
        }
    ),
    customer_experience=[
        "Children’s specialty hospital"
    ],
    rating=4.8
),

Consultant(
    id="C107",
    competences=[
        "Construction site project management",
        "Large-scale infrastructure coordination",
        "Subcontractor oversight",
        "On-site safety compliance"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Urban highway construction"
    ],
    rating=4.4
),

Consultant(
    id="C108",
    competences=[
        "AI ethics and governance advisory",
        "Bias detection in machine learning",
        "Responsible AI deployment frameworks",
        "Regulatory AI compliance documentation"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Public AI regulatory advisory board"
    ],
    rating=4.6
),

Consultant(
    id="C109",
    competences=[
        "Advanced refrigeration system engineering",
        "Industrial freezer calibration",
        "Cold chain compliance monitoring",
        "Temperature control system diagnostics"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "National cold storage operator"
    ],
    rating=4.7
),

Consultant(
    id="C110",
    competences=[
        "Professional long-haul freight driver",
        "Cross-border transport compliance",
        "Cargo securing procedures",
        "Vehicle inspection and maintenance logs"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(5, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "European logistics network"
    ],
    rating=4.6
),
Consultant(
    id="C111",
    competences=[
        "Senior trauma surgeon",
        "Complex emergency surgical procedures",
        "Acute hemorrhage control",
        "Supervision of operating room teams"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(8, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Level 1 trauma center"
    ],
    rating=4.9
),

Consultant(
    id="C112",
    competences=[
        "Junior delivery driver",
        "Urban route navigation",
        "Parcel scanning and confirmation",
        "Basic customer service interaction"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Local courier company"
    ],
    rating=3.7
),

Consultant(
    id="C113",
    competences=[
        "Senior data platform architect",
        "Distributed computing systems",
        "High-throughput data ingestion pipelines",
        "Event-driven microservices"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Global fintech infrastructure"
    ],
    rating=4.8
),

Consultant(
    id="C114",
    competences=[
        "Geriatric nurse specialist",
        "Chronic disease monitoring",
        "Elderly mobility support",
        "Medication management protocols"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Long-term residential care facility"
    ],
    rating=4.7
),

Consultant(
    id="C115",
    competences=[
        "Warehouse automation technician",
        "Conveyor system diagnostics",
        "Robotic picking systems",
        "Industrial control panel maintenance"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Automated distribution hub"
    ],
    rating=4.5
),

Consultant(
    id="C116",
    competences=[
        "Senior React engineer",
        "Component architecture design",
        "Performance optimization",
        "Accessibility compliance (WCAG)"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "International SaaS dashboard"
    ],
    rating=4.6
),

Consultant(
    id="C117",
    competences=[
        "Critical care respiratory therapist",
        "Ventilator parameter optimization",
        "Airway management support",
        "ICU patient respiratory monitoring"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
        }
    ),
    customer_experience=[
        "University ICU department"
    ],
    rating=4.8
),

Consultant(
    id="C118",
    competences=[
        "Cybersecurity compliance specialist",
        "ISO 27001 implementation",
        "Risk assessment documentation",
        "Security policy enforcement"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Enterprise risk management team"
    ],
    rating=4.6
),

Consultant(
    id="C119",
    competences=[
        "Forklift operator in cold storage",
        "Frozen goods pallet stacking",
        "Temperature compliance tracking",
        "Freezer safety procedures"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Large refrigerated warehouse"
    ],
    rating=4.4
),

Consultant(
    id="C120",
    competences=[
        "LLM evaluation engineer",
        "Prompt performance benchmarking",
        "Model hallucination detection",
        "Semantic similarity testing"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "AI research startup"
    ],
    rating=4.7
),

Consultant(
    id="C121",
    competences=[
        "Hospital transport coordinator",
        "Patient logistics scheduling",
        "Clinical equipment movement",
        "Shift resource allocation"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Metropolitan hospital system"
    ],
    rating=4.3
),

Consultant(
    id="C122",
    competences=[
        "Electrical grid operations engineer",
        "Power distribution monitoring",
        "Emergency outage response",
        "Infrastructure risk mitigation"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "National energy provider"
    ],
    rating=4.7
),

Consultant(
    id="C123",
    competences=[
        "Senior logistics route planner",
        "Fleet optimization modeling",
        "Fuel efficiency analysis",
        "Transport compliance auditing"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "European freight carrier"
    ],
    rating=4.6
),

Consultant(
    id="C124",
    competences=[
        "Operating room anesthesiologist",
        "Sedation management",
        "Pre-operative assessment",
        "Critical intraoperative monitoring"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Surgical specialty hospital"
    ],
    rating=4.9
),

Consultant(
    id="C125",
    competences=[
        "Retail operations supervisor",
        "Staff scheduling coordination",
        "Inventory restocking oversight",
        "Customer complaint handling"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(12, 0), end=time(20, 0))]
        }
    ),
    customer_experience=[
        "Major department store"
    ],
    rating=4.4
),

Consultant(
    id="C126",
    competences=[
        "Senior Python backend engineer",
        "Scalable REST API design",
        "Database indexing optimization",
        "High-concurrency request handling"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Global SaaS provider"
    ],
    rating=4.8
),

Consultant(
    id="C127",
    competences=[
        "Cold chain compliance auditor",
        "Food safety inspection protocols",
        "Refrigeration temperature audits",
        "Warehouse hygiene certification"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "National food logistics company"
    ],
    rating=4.5
),

Consultant(
    id="C128",
    competences=[
        "ICU shift coordinator",
        "Critical care team supervision",
        "Patient acuity assessment",
        "Resource allocation under high load"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
        }
    ),
    customer_experience=[
        "Regional critical care hospital"
    ],
    rating=4.8
),

Consultant(
    id="C129",
    competences=[
        "Senior machine learning scientist",
        "Transformer model optimization",
        "Large-scale NLP experimentation",
        "Production ML deployment strategy"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "AI research laboratory"
    ],
    rating=4.9
),

Consultant(
    id="C130",
    competences=[
        "Long-haul refrigerated truck driver",
        "Cold cargo handling procedures",
        "Cross-border freight documentation",
        "Vehicle condition inspections"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(6, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "International cold logistics network"
    ],
    rating=4.6
),
Consultant(
    id="C131",
    competences=[
        "Senior ICU physician",
        "Multi-organ failure management",
        "Advanced hemodynamic monitoring",
        "Critical care team leadership"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(8, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "University hospital intensive care unit"
    ],
    rating=4.9
),

Consultant(
    id="C132",
    competences=[
        "Junior warehouse associate",
        "Manual pallet loading",
        "Basic inventory scanning",
        "Maintaining warehouse cleanliness"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Local storage facility"
    ],
    rating=3.6
),

Consultant(
    id="C133",
    competences=[
        "Cloud security engineer",
        "Identity and access management systems",
        "Secure API gateway configuration",
        "Threat detection and mitigation"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Enterprise SaaS infrastructure"
    ],
    rating=4.7
),

Consultant(
    id="C134",
    competences=[
        "Geriatric care coordinator",
        "Long-term treatment planning",
        "Medication schedule supervision",
        "Family communication support"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "Residential elderly care center"
    ],
    rating=4.6
),

Consultant(
    id="C135",
    competences=[
        "Heavy equipment operator",
        "Forklift and reach truck certification",
        "Warehouse safety compliance",
        "High-volume freight coordination"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "International logistics hub"
    ],
    rating=4.4
),

Consultant(
    id="C136",
    competences=[
        "AI solutions architect",
        "LLM system design",
        "Semantic retrieval systems",
        "Enterprise AI deployment strategy"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Large-scale AI transformation project"
    ],
    rating=4.9
),

Consultant(
    id="C137",
    competences=[
        "Retail cashier assistant",
        "Customer transaction handling",
        "POS terminal operation",
        "Shelf restocking support"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(12, 0), end=time(20, 0))]
        }
    ),
    customer_experience=[
        "High-traffic retail outlet"
    ],
    rating=4.0
),

Consultant(
    id="C138",
    competences=[
        "Transport compliance officer",
        "Regulatory freight documentation",
        "Vehicle inspection audits",
        "Cross-border logistics procedures"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "International freight network"
    ],
    rating=4.6
),

Consultant(
    id="C139",
    competences=[
        "DevOps site reliability engineer",
        "High-availability infrastructure",
        "Incident response automation",
        "Load balancing and scaling systems"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Global fintech platform"
    ],
    rating=4.8
),

Consultant(
    id="C140",
    competences=[
        "Emergency trauma nurse",
        "Rapid triage assessment",
        "Acute care stabilization",
        "Critical patient monitoring"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
        }
    ),
    customer_experience=[
        "Metropolitan trauma center"
    ],
    rating=4.7
),

Consultant(
    id="C141",
    competences=[
        "Cold chain logistics coordinator",
        "Temperature-sensitive transport planning",
        "Perishable goods compliance",
        "Warehouse refrigeration audits"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(14, 0))]
        }
    ),
    customer_experience=[
        "Food distribution corporation"
    ],
    rating=4.5
),

Consultant(
    id="C142",
    competences=[
        "Senior backend engineer (Java)",
        "Concurrent service design",
        "Secure authentication flows",
        "Distributed transaction systems"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "Financial trading platform"
    ],
    rating=4.8
),

Consultant(
    id="C143",
    competences=[
        "Hospital ICU transport nurse",
        "Ventilator-assisted patient movement",
        "Critical transfer stabilization",
        "Emergency coordination with specialists"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Regional intensive care hospital"
    ],
    rating=4.7
),

Consultant(
    id="C144",
    competences=[
        "Junior AI engineer",
        "Prompt experimentation",
        "Embedding similarity evaluation",
        "FastAPI model integration"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(10, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "Startup AI prototype deployment"
    ],
    rating=4.2
),

Consultant(
    id="C145",
    competences=[
        "Retail operations manager",
        "Staff supervision during peak hours",
        "Cash flow reconciliation",
        "Customer conflict resolution"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(12, 0), end=time(20, 0))]
        }
    ),
    customer_experience=[
        "National retail chain"
    ],
    rating=4.6
),

Consultant(
    id="C146",
    competences=[
        "Long-haul truck driver",
        "Heavy cargo load securing",
        "Route planning optimization",
        "Fuel efficiency monitoring"
    ],
    availability=Availability(
        days={
            "Monday": [TimeSlot(start=time(6, 0), end=time(18, 0))]
        }
    ),
    customer_experience=[
        "International freight transport company"
    ],
    rating=4.4
),

Consultant(
    id="C147",
    competences=[
        "Senior data scientist",
        "Natural language processing pipelines",
        "Transformer fine-tuning",
        "Production ML lifecycle management"
    ],
    availability=Availability(
        days={
            "Tuesday": [TimeSlot(start=time(9, 0), end=time(17, 0))]
        }
    ),
    customer_experience=[
        "AI research lab"
    ],
    rating=4.9
),

Consultant(
    id="C148",
    competences=[
        "Pharmaceutical logistics specialist",
        "Temperature-controlled medicine transport",
        "Regulatory compliance documentation",
        "Cold chain validation protocols"
    ],
    availability=Availability(
        days={
            "Wednesday": [TimeSlot(start=time(7, 0), end=time(15, 0))]
        }
    ),
    customer_experience=[
        "National healthcare supply chain"
    ],
    rating=4.7
),

Consultant(
    id="C149",
    competences=[
        "ICU respiratory nurse",
        "Advanced ventilator setup",
        "Severe respiratory distress management",
        "Patient oxygenation monitoring"
    ],
    availability=Availability(
        days={
            "Thursday": [TimeSlot(start=time(7, 0), end=time(19, 0))]
        }
    ),
    customer_experience=[
        "Critical care unit"
    ],
    rating=4.8
),

Consultant(
    id="C150",
    competences=[
        "Senior logistics data analyst",
        "Route efficiency modeling",
        "Warehouse throughput optimization",
        "Operational KPI dashboard development"
    ],
    availability=Availability(
        days={
            "Friday": [TimeSlot(start=time(8, 0), end=time(16, 0))]
        }
    ),
    customer_experience=[
        "Global shipping enterprise"
    ],
    rating=4.6
),
]

# CUSTOMERS
customers = [
    Customer(
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
    ),
    Customer(
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
    ),
    Customer(
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
    ),
    Customer(
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
    ),
    Customer(
        id="K5",
        name="ScandExpress Parcel Services",
        required_competences_per_department={
            "Last Mile Operations": [
                "Timely parcel distribution",
                "Urban navigation efficiency"
            ]
        },
        preferred_consultants=[]
    ),
    Customer(
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
    ),
    Customer(
        id="K7",
        name="Metropolitan Acute Care Hospital",
        required_competences_per_department={
            "Emergency Services": [
                "Rapid clinical decision-making",
                "Acute patient stabilization"
            ]
        },
        preferred_consultants=[]
    ),
    Customer(
        id="K8",
        name="SilverLife Residential Care",
        required_competences_per_department={
            "Long-Term Care": [
                "Resident support",
                "Daily living assistance"
            ]
        },
        preferred_consultants=[]
    ),
    Customer(
        id="K9",
        name="Nordic Food Distribution",
        required_competences_per_department={
            "Cold Storage Operations": [
                "Temperature-sensitive goods handling",
                "Warehouse hygiene compliance"
            ]
        },
        preferred_consultants=[]
    ),
    Customer(
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
]

# STAFFING NEEDS
staffing_needs = [
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
    ),
    StaffingNeed(
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
]
