import axios, { AxiosInstance } from "axios"
import {
    TStaffingNeed,
    TRecommendResponse,
    TChatRequest,
    TChatResponse,
} from "../types/intelliplan-api"

class IntelliplanApiService {
    private api: AxiosInstance

    constructor() {
        this.api = axios.create({
            baseURL: process.env.NEXT_PUBLIC_INTELLIPLAN_API_BASE_URL || "http://localhost:8000",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    async recommend(staffingNeed: TStaffingNeed): Promise<TRecommendResponse> {
        const response = await this.api.post<TRecommendResponse>(
            "/recommend/",
            staffingNeed
        )
        return response.data
    }

    async chat(request: TChatRequest): Promise<TChatResponse> {
        const response = await this.api.post<TChatResponse>(
            "/chat/",
            request
        )
        return response.data
    }
}

export const intelliplanApiService = new IntelliplanApiService()
