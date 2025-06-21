from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry
from .database import Base

class Room(Base):
    __tablename__ = 'rooms'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    location_id = Column(Integer, ForeignKey('locations.id'))
    user_id = Column(Integer, ForeignKey('users.id'))
    coordinates = Column(Geometry(geometry_type='POINT', srid=4326))

    location = relationship("Location", back_populates="rooms")
    user = relationship("User", back_populates="rooms")