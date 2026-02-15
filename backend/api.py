from fastapi import FastAPI
from models import StaffingNeed
from ranking import (get_recommendations)
from data import (consultants)

app = FastAPI()


@app.post("/recommend")
def recommend(staffing_need: StaffingNeed):
    results = get_recommendations(staffing_need, consultants)
    return {"staffing_need_id": staffing_need.id, "top_matches": results}
