from model import NftCollection
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['https://localhost:3000']

from database import (
    fetch_one_collection,
    fetch_all_collections,
    create_collection,
    update_collection,
    remove_collection
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.get("/")
def read_root():
    return {"Ping":"Pong"}

@app.get("api/collections")
async def get_collections():
    response = await fetch_all_collections()
    return response

@app.get("/api/collection{tokenId}", response_model=NftCollection)
async def get_collection_by_id(tokenId):
    response = fetch_one_collection(tokenId)
    if response:
        return response
    raise HTTPException(404, f"No Collection with the id: {tokenId}")

@app.post("/api/collection", response_model=NftCollection)
async def post_collection(collection: NftCollection):
    response = await create_collection(collection.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/collection{tokenId}", response_model=NftCollection)
async def put_collection(tokenId: str, name: str, imgPath: str):
    response = await update_collection(tokenId, name, imgPath)
    if response:
        return response
    raise HTTPException(404, f"No Collection with the id: {tokenId}")

@app.delete("/api/collection{tokenId}")
async def delete_collection(tokenId):
    response = await remove_collection(tokenId)
    if response:
        return "Succesfully deleted collection item."
    raise HTTPException(404, f"No Collection with the id: {tokenId}")