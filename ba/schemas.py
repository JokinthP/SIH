from fastapi import File,UploadFile
from pydantic import BaseModel
from typing import Optional

class ComplaintWithImageSchema(BaseModel):
    PNR: str
    SNO: Optional[int] = None
    discription: str
    category: str
    sub_category: str
    priority: str
    status: str
    
    
    
