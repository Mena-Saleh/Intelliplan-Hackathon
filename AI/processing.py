from sentence_transformers import SentenceTransformer
import numpy as np

_model = SentenceTransformer("all-mpnet-base-v2")


def get_embeddings(sentence: str) -> np.ndarray:
    embedding = _model.encode(sentence, convert_to_numpy=True)
    return embedding


def get_cosine_similarity(vec1: np.ndarray, vec2: np.ndarray) -> float:
    dot_product = np.dot(vec1, vec2)
    norm_vec1 = np.linalg.norm(vec1)
    norm_vec2 = np.linalg.norm(vec2)

    if norm_vec1 == 0 or norm_vec2 == 0:
        return 0.0

    return float(dot_product / (norm_vec1 * norm_vec2))
