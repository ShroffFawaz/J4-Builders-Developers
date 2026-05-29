from fastapi import APIRouter, Depends, HTTPException, Form
from database import get_db
from model import QuoteRequest, ProjectType
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/contact", tags=["Contact"])

# Pydantic schema for response validation
class QuoteRequestResponse(BaseModel):
    id: int
    name: str
    email: str | None = None
    phone: str
    project_type: ProjectType
    project_description: str
    created_at: datetime
    whatsapp_url: str | None = None

    model_config = {
        "from_attributes": True
    }

@router.post("/contact", response_model=QuoteRequestResponse)
async def create_contact(
    name: str = Form(...),
    email: str | None = Form(None),
    phone: str = Form(...),
    project_type: ProjectType = Form(...),
    project_description: str = Form(...),
    db: Session = Depends(get_db)
):
    contact = QuoteRequest(
        name=name,
        email=email,
        phone=phone,
        project_type=project_type,
        project_description=project_description
    )
    db.add(contact)
    db.commit()
    db.refresh(contact)

    import urllib.parse
    msg = (
        f"Hello, I am {contact.name}.\n"
        f"I would like to inquire about your services.\n\n"
        f"*Phone:* {contact.phone}\n"
        f"*Email:* {contact.email or 'N/A'}\n"
        f"*Project Type:* {contact.project_type.value}\n"
        f"*Project Brief:* {contact.project_description}"
    )
    encoded_msg = urllib.parse.quote(msg)
    contact.whatsapp_url = f"https://wa.me/918499064599?text={encoded_msg}"
    
    return contact

@router.get("/all-contact", response_model=list[QuoteRequestResponse])
async def get_all_contact(db: Session = Depends(get_db)):
    contacts = db.query(QuoteRequest).all()
    return contacts