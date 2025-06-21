from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.room import Room
from ..schemas.room import RoomCreate, RoomResponse

router = APIRouter()

@router.post("/rooms/", response_model=RoomResponse)
def create_room(room: RoomCreate, db: Session = Depends(get_db)):
    db_room = Room(**room.dict())
    db.add(db_room)
    db.commit()
    db.refresh(db_room)
    return db_room

@router.get("/rooms/{room_id}", response_model=RoomResponse)
def read_room(room_id: int, db: Session = Depends(get_db)):
    room = db.query(Room).filter(Room.id == room_id).first()
    if room is None:
        raise HTTPException(status_code=404, detail="Room not found")
    return room

@router.get("/rooms/", response_model=list[RoomResponse])
def read_rooms(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    rooms = db.query(Room).offset(skip).limit(limit).all()
    return rooms

@router.delete("/rooms/{room_id}", response_model=RoomResponse)
def delete_room(room_id: int, db: Session = Depends(get_db)):
    room = db.query(Room).filter(Room.id == room_id).first()
    if room is None:
        raise HTTPException(status_code=404, detail="Room not found")
    db.delete(room)
    db.commit()
    return room