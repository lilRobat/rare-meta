from pydantic import BaseModel

class Collection(BaseModel):
    tokenId: str
    name: str
    imgPath: str