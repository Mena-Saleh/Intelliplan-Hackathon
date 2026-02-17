from typing import List, Dict, Literal
from pydantic import BaseModel
from datetime import date, time

class TimeSlot(BaseModel):
    start: time
    end: time

class Availability(BaseModel):
    days: Dict[str, List[TimeSlot]]

class Consultant(BaseModel):
    id: str
    competences: List[str] 
    availability: Availability
    customer_experience: List[str] 
    rating: float | None = None

class StaffingNeed(BaseModel):
    id: str| None = None
    date: date
    start_time: time
    end_time: time
    required_competences: List[str]
    customer_id: str | None = None
    department: str | None = None
    urgency_level: Literal["low", "medium", "high"] | None = None

class Customer(BaseModel):
    id: str
    name: str
    required_competences_per_department: Dict[str, List[str]]
    preferred_consultants: List[str] | None = None

class Booking(BaseModel):
    consultant_id: str
    staffing_need_id: str
    status: Literal["suggested", "requested", "approved", "confirmed"]

class RiskAssessment(BaseModel):
    level: Literal["LOW", "MEDIUM", "HIGH"]
    reason: str

class Recommendation(BaseModel):
    consultant: Consultant
    score: float
    risk: RiskAssessment