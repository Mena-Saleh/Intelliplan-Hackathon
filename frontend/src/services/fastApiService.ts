import axios, { AxiosInstance } from "axios"
import {
    StaffingNeed,
    RecommendResponse,
    ChatRequest,
    ChatResponse,
} from "../types/staffing"

class FastApiService {
    private api: AxiosInstance

    constructor() {
        this.api = axios.create({
            baseURL: "http://127.0.0.1:8000",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    // Recommend
    async recommend(staffingNeed: StaffingNeed): Promise<RecommendResponse> {
        const response = await this.api.post<RecommendResponse>(
            "/recommend/",
            staffingNeed
        )
        return response.data
    }

    // Chat
    async chat(request: ChatRequest): Promise<ChatResponse> {
        const response = await this.api.post<ChatResponse>(
            "/chat/",
            request
        )
        return response.data
    }
}

export const fastApiService = new FastApiService()
