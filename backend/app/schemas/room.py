from pydantic import BaseModel
from typing import Optional

class RoomBase(BaseModel):
    title: str
    description: str
    price: float
    location_id: int
    user_id: int

class RoomCreate(RoomBase):
    pass

class Room(RoomBase):
    id: int

    class Config:
        orm_mode = True

class RoomInDB(Room):
    created_at: Optional[str] = None
    updated_at: Optional[str] = None