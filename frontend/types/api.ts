export type TUrgencyLevel = "low" | "medium" | "high"

export interface TStaffingNeed {
    id: string
    date: string
    start_time: string
    end_time: string
    required_competences: string[]
    customer_id: string
    department: string
    urgency_level: TUrgencyLevel
}

export interface TAvailability {
    date?: string
    start_time?: string
    end_time?: string
}

export interface TConsultant {
    id: string
    competences: string[]
    availability: TAvailability
    customer_experience: string[]
    rating?: number | null
}

export interface TRankedConsultant {
    id: string
    rating: number | null
    risk_level: string
    risk_reason: string
    consultant: TConsultant
}

export interface TRecommendResponse {
    staffing_need_id: string
    top_matches: TRankedConsultant[]
}

export interface TChatRequest {
    session_id?: string | null
    message: string
}

export type TChatStatus = "new_session" | "incomplete" | "complete"

export interface TChatResponse {
    status: TChatStatus
    session_id: string
    assistant_message?: string
    staffing_need?: any
    current_state?: any
}
