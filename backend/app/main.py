from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import users, rooms, matches
from app.config import settings

app = FastAPI()

# CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the routes
app.include_router(users.router)
app.include_router(rooms.router)
app.include_router(matches.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the MyRoomie API!"}