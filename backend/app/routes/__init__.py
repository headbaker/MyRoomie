from fastapi import APIRouter

router = APIRouter()

from .users import router as users_router
from .rooms import router as rooms_router
from .matches import router as matches_router

router.include_router(users_router, prefix="/users", tags=["users"])
router.include_router(rooms_router, prefix="/rooms", tags=["rooms"])
router.include_router(matches_router, prefix="/matches", tags=["matches"])