from fastapi import APIRouter, Depends, HTTPException, status
from backend.models.domain import StaffingNeed
from backend.services.embedding_service import embedding_service
from backend.services.ranking_service import RankingService
from backend.data.mocked_data import consultants

recommend_router = APIRouter()


def get_ranking_service():
    return RankingService(embedding_service)


@recommend_router.post("/", status_code=status.HTTP_200_OK)
def recommend(staffing_need: StaffingNeed,ranking_service: RankingService = Depends(get_ranking_service)):
    try:
        results = ranking_service.get_recommendations(
            staffing_need,
            consultants
        )

        return {
            "staffing_need_id": staffing_need.id,
            "top_matches": results
        }

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
