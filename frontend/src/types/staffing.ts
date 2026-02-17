export type UrgencyLevel = "low" | "medium" | "high"


export interface StaffingNeed {
    id: string
    date: string              // YYYY-MM-DD
    start_time: string        // ISO string or HH:MM
    end_time: string
    required_competences: string[]
    customer_id: string
    department: string
    urgency_level: UrgencyLevel
}

export interface Availability {
    date?: string
    start_time?: string
    end_time?: string
}

export interface Consultant {
    id: string
    competences: string[]
    availability: Availability
    customer_experience: string[]
    rating?: number | null
}

export interface RankedConsultant {
    id: string
    rating: number | null
    risk_level: string
    risk_reason: string
    consultant: Consultant
}

export interface RecommendResponse {
    staffing_need_id: string
    top_matches: RankedConsultant[]
}

export interface ChatRequest {
    session_id?: string | null
    message: string
}

export type ChatStatus = "new_session" | "incomplete" | "complete"

export interface ChatResponse {
    status: ChatStatus
    session_id: string
    assistant_message?: string
    staffing_need?: any
    current_state?: any
}
