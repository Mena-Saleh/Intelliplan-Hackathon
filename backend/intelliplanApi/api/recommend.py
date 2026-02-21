from fastapi import APIRouter, Depends, HTTPException, status
from intelliplanApi.models.domain import StaffingNeed
from intelliplanApi.services.embedding_service import embedding_service
from intelliplanApi.services.ranking_service import RankingService
from intelliplanApi.data.mocked_data import consultants
from intelliplanApi.services.llm_service import LLMService

recommend_router = APIRouter()
llm_service = LLMService()

def get_ranking_service():
    return RankingService(embedding_service)


@recommend_router.post("/", status_code=status.HTTP_200_OK)
def recommend(staffing_need: StaffingNeed,ranking_service: RankingService = Depends(get_ranking_service)):
    try:
        semantic_results = ranking_service.get_recommendations(
            staffing_need,
            consultants,
            top_k=30
        )
        top_candidates = [r["consultant"] for r in semantic_results]

        llm_results = llm_service.rerank_consultants(
            staffing_need,
            top_candidates,
            top_k=5
        )

        return {
            "staffing_need_id": staffing_need.id,
            "top_matches": llm_results
        }

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
