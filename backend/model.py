from pydantic import BaseModel

class NftCollection(BaseModel):
    tokenId: str
    name: str
    imgPath: str