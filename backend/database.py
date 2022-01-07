from model import Collection
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
db = client.NftCollections
collection = db.collections

async def fetch_one_collection(tokenId):
    document = await collection.find_one({"tokenId": tokenId})
    return document

async def fetch_all_collections():
    collections = []
    cursor = collection.find({})
    async for document in cursor:
        collections.append(Collection(**document))
    return collections

async def create_collection(Collection):
    document = Collection
    result = await collection.insert_one(document)
    return result

async def update_collection(tokenId, name, imgPath):
    await collection.update_one({"tokenId": tokenId}, {"$set": {
        "name": tokenId,
        "imgPath": imgPath
    }})
    document = await collection.find_one({"tokenId": tokenId})
    return document

async def remove_collection(tokenId):
    await collection.delete_one({"tokenId": tokenId})
    return True