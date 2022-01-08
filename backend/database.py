from model import NftCollection
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
db = client.Nfts
collection = db.NftCollections

async def fetch_one_collection(tokenId):
    document = await collection.find_one({"tokenId": tokenId})
    return document

async def fetch_all_collections():
    collections = []
    cursor = collection.find({})
    async for document in cursor:
        collections.append(NftCollection(**document))
    return collections

async def create_collection(nftCollection):
    document = nftCollection
    result = await collection.insert_one(document)
    return document

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