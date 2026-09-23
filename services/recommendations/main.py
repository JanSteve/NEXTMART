from fastapi import FastAPI, Query
import redis
import os
import json
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI(title="NexMart Recommendation Service")

redis_client = redis.Redis(
    host=os.getenv("REDIS_HOST", "localhost"),
    port=int(os.getenv("REDIS_PORT", 6379)),
    decode_responses=True
)

@app.get("/api/v1/recommend/homepage")
async def get_homepage_recommendations(userId: str = Query(None)):
    cache_key = f"rec:homepage:{userId}" if userId else "rec:homepage:anonymous"
    cached = redis_client.get(cache_key)
    if cached:
        return json.loads(cached)
    
    # Mock fallback
    recommendations = ["ELEC-SAM-S24U-001", "FASH-TEE-001"]
    redis_client.setex(cache_key, 3600, json.dumps(recommendations))
    return recommendations

@app.get("/api/v1/recommend/similar")
async def get_similar_products(productId: str):
    cache_key = f"rec:similar:{productId}"
    cached = redis_client.get(cache_key)
    if cached:
        return json.loads(cached)
    
    recommendations = ["ELEC-SAM-S24U-002", "ELEC-SAM-S23U-001"]
    redis_client.setex(cache_key, 3600, json.dumps(recommendations))
    return recommendations

@app.get("/api/v1/recommend/frequently-bought")
async def get_frequently_bought_together(productId: str):
    return ["ACC-CASE-001", "ACC-CHARGER-001"]
