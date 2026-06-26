import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contact import router as contact_router

app = FastAPI(title="J4 Builders and Developers")

from dotenv import load_dotenv

load_dotenv()

def get_allowed_origins() -> list[str]:
    raw = os.getenv("ALLOW_ORGINS") or os.getenv("ALLOW_ORIGINS") or ""
    if not raw.strip():
        return ["*"] # default to wildcard if empty, or can just use localhost
    return [origin.strip() for origin in raw.split(",") if origin.strip()]

ALLOW_ORGINS = get_allowed_origins()

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOW_ORGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)  


from database import engine, Base
import model # Ensure models are registered on Base

Base.metadata.create_all(bind=engine)

app.include_router(contact_router)

@app.get("/")
async def root():   
    return {"message": "J4 Builders and Developers API is running"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)



