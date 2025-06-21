from pydantic import BaseModel
from typing import List, Optional

class MatchBase(BaseModel):
    user_id: int
    room_id: int
    compatibility_score: float

class MatchCreate(MatchBase):
    pass

class Match(MatchBase):
    id: int

    class Config:
        orm_mode = True

class MatchList(BaseModel):
    matches: List[Match]