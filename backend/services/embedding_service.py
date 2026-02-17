from sentence_transformers import SentenceTransformer
import numpy as np
import torch
import gc

class EmbeddingService:
    
    def __init__(self):
        self.model: SentenceTransformer | None = None

    def load_model(self):
        if self.model is None:
            # self.model = SentenceTransformer("all-mpnet-base-v2")
            self.model = SentenceTransformer("BAAI/bge-large-en-v1.5")

    def embed(self, text: str) -> np.ndarray:
        if self.model is None:
            raise RuntimeError("Model not loaded")

        return self.model.encode(
            "Represent this sentence for searching relevant passages: " + text,
            normalize_embeddings=True,
            convert_to_numpy=True
        )

    @staticmethod
    def cosine_similarity(vec1: np.ndarray, vec2: np.ndarray) -> float:
        return float(np.dot(vec1, vec2))

    @staticmethod
    def l2_distance(vec1: np.ndarray, vec2: np.ndarray) -> float:
        return float(np.linalg.norm(vec1 - vec2))

    @staticmethod
    def l1_distance(vec1: np.ndarray, vec2: np.ndarray) -> float:
        return float(np.sum(np.abs(vec1 - vec2)))



embedding_service = EmbeddingService()
