from fastapi import FastAPI
from .config import settings
from .database import engine
from .models import Base
from .routes import users, rooms, matches
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(users.router)
app.include_router(rooms.router)
app.include_router(matches.router)