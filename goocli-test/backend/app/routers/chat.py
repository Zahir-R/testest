from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas
from app.database import get_db
from app.routers.auth import get_current_user
from app.models.models import User, ChatLog

router = APIRouter()

@router.post("/", response_model=schemas.ChatResponse)
def chat_with_bot(request: schemas.ChatRequest, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    # Mock Menopause AI logic. In a real scenario, this would call an LLM (like OpenAI/Anthropic/Gemini)
    user_msg = request.message.lower()
    
    response_text = "I'm here to support you. Could you share more about what you're experiencing?"
    
    if "hot flash" in user_msg:
         response_text = "Hot flashes are very common during menopause. Try keeping your environment cool, wearing layers, and avoiding triggers like spicy food or caffeine."
    elif "sleep" in user_msg or "insomnia" in user_msg:
         response_text = "Sleep disturbances are a frequent symptom. Establishing a relaxing bedtime routine and avoiding screens before bed can help."
    elif "mood" in user_msg or "anxiety" in user_msg:
         response_text = "Mood changes and anxiety can be challenging. Practice self-care, and consider speaking to a healthcare professional or counselor for strategies to cope."
         
    # Save to database
    chat_log = ChatLog(
        user_id=current_user.id,
        message=request.message,
        response=response_text
    )
    db.add(chat_log)
    db.commit()
    db.refresh(chat_log)
    
    return chat_log

@router.get("/history", response_model=list[schemas.ChatResponse])
def get_chat_history(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    history = db.query(ChatLog).filter(ChatLog.user_id == current_user.id).order_by(ChatLog.timestamp.desc()).all()
    return history
