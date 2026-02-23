from fastapi import FastAPI
from contextlib import asynccontextmanager
from intelliplanApi.services.embedding_service import embedding_service
from intelliplanApi.api.recommend import recommend_router
from intelliplanApi.api.chat import chat_router
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    embedding_service.load_model()
    yield

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_ORIGIN")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(recommend_router, prefix="/recommend")
app.include_router(chat_router, prefix="/chat")
