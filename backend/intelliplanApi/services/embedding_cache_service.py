import pickle
import hashlib
from pathlib import Path
from typing import Dict, Any
import numpy as np


class EmbeddingCacheService:
    def __init__(self, embedding_service, cache_path: str = "cache/embeddings.pkl"):
        self.embedding_service = embedding_service
        self.cache_path = Path(cache_path)
        self.cache_path.parent.mkdir(parents=True, exist_ok=True)

        self._cache: Dict[str, Dict[str, Any]] = self._load_cache()

    def _load_cache(self) -> Dict[str, Dict[str, Any]]:
        if self.cache_path.exists():
            with open(self.cache_path, "rb") as f:
                return pickle.load(f)
        return {}

    def _save_cache(self):
        with open(self.cache_path, "wb") as f:
            pickle.dump(self._cache, f)

    def _hash_text(self, text: str) -> str:
        return hashlib.sha256(text.encode("utf-8")).hexdigest()

    def get_embedding(self, consultant_id: str, field: str, text: str) -> np.ndarray:
        if not text:
            return None

        text_hash = self._hash_text(text)

        consultant_cache = self._cache.setdefault(consultant_id, {})
        field_cache = consultant_cache.get(field)

        if field_cache and field_cache["hash"] == text_hash:
            return field_cache["embedding"]

        embedding = self.embedding_service.embed(text)

        consultant_cache[field] = {
            "hash": text_hash,
            "embedding": embedding,
        }

        self._save_cache()
        return embedding

    def precompute(self, consultants):
        updated = False

        for consultant in consultants:
            comp_text = " ".join(consultant.competences)
            if comp_text:
                text_hash = self._hash_text(comp_text)
                existing = self._cache.get(consultant.id, {}).get("competences")

                if not existing or existing["hash"] != text_hash:
                    emb = self.embedding_service.embed(comp_text)
                    self._cache.setdefault(consultant.id, {})["competences"] = {
                        "hash": text_hash,
                        "embedding": emb,
                    }
                    updated = True

            exp_text = " ".join(consultant.customer_experience or [])
            if exp_text:
                text_hash = self._hash_text(exp_text)
                existing = self._cache.get(consultant.id, {}).get("experience")

                if not existing or existing["hash"] != text_hash:
                    emb = self.embedding_service.embed(exp_text)
                    self._cache.setdefault(consultant.id, {})["experience"] = {
                        "hash": text_hash,
                        "embedding": emb,
                    }
                    updated = True

        if updated:
            self._save_cache()
