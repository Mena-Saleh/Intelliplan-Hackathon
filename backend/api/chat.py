from fastapi import APIRouter, HTTPException
from httpcore import request
from pydantic import BaseModel
from requests import session
from backend.services.llm_service import LLMService
from backend.services.session_service import SessionService

chat_router = APIRouter()

llm_service = LLMService()
session_service = SessionService()


class ChatRequest(BaseModel):
    session_id: str | None = None
    message: str


FIELD_QUESTIONS = {
    "date": "What date is the staffing needed?",
    "start_time": "What is the start time?",
    "end_time": "What is the end time?",
    "required_competences": "What competences are required? Please list them.",
}


@chat_router.post("/")
def chat(request: ChatRequest):

    if not request.session_id:
        session_id = session_service.create_session()
        return {
            "status": "new_session",
            "session_id": session_id,
            "assistant_message": "Hello there, I'm here to help with your staffing request. What do you need help with?"
        }

    session = session_service.get_session(request.session_id)

    if not session:
        raise HTTPException(status_code=404, detail="Invalid session ID")

    extracted = llm_service.extract_fields(
        user_message=request.message,
        current_state=session["data"],
        last_question=session["last_question"]
    )
    session_service.update_session(request.session_id, extracted)

    if session_service.is_complete(request.session_id):

        final_data = session_service.get_session(request.session_id)

        return {
            "status": "complete",
            "session_id": request.session_id,
            "staffing_need": final_data
        }

    missing = session_service.missing_fields(request.session_id)
    next_question = FIELD_QUESTIONS[missing[0]]
    session["last_question"] = next_question

    return {
        "status": "incomplete",
        "session_id": request.session_id,
        "assistant_message": next_question,
        "current_state": session_service.get_session(request.session_id)
    }
