import enum
from sqlalchemy import Column, Integer, String, Text, DateTime, Enum as SAEnum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from database import Base


class ProjectType(enum.Enum):
    RESIDENTIAL_CONSTRUCTION = "Residential Construction"
    COMMERCIAL_CONSTRUCTION = "Commercial Construction"
    SERVICES = "Servies"    
    INTERIORS = "Interior Design"
    RENOVATION_RESTORATION = "Renovation & Restoration"



class QuoteRequest(Base):
    __tablename__ = "quote_requests"  
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column("full_name", String(255), nullable=False)
    email = Column("email", String(255), nullable=True)
    phone = Column("phone_number", String(50), nullable=False)
    project_type = Column("project_types", SAEnum(ProjectType, name="project_type", create_type = False, values_callable=lambda x: [item.value for item in x]), nullable=False)
    project_description = Column("project_brief", Text, nullable=False)
    created_at = Column("created_at", DateTime(timezone=True), default=func.now())