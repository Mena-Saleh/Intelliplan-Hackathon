from fastapi import FastAPI
from contextlib import asynccontextmanager
from backend.services.embedding_service import embedding_service
from backend.api.recommend import recommend_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    embedding_service.load_model()
    yield

app = FastAPI(lifespan=lifespan)

app.include_router(recommend_router, prefix="/recommend")
