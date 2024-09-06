from schemas import ComplaintWithImageSchema
from bson import ObjectId
from fastapi import FastAPI, HTTPException, File, UploadFile, Depends
from db import collection
from typing import List
import base64

app = FastAPI()

@app.post("/add_complaint_with_image/", response_model=dict)
async def add_complaint_with_image( image: UploadFile = File(...) , complaint: str = Depends(ComplaintWithImageSchema)):
    try:
        # Read the image and encode it to base64
        image_content = await image.read()
        encoded_image = base64.b64encode(image_content).decode("utf-8")
        
        # Add the encoded image to the complaint data
        complaint_data = complaint.dict()
        complaint_data["image"] = encoded_image
        
        # Insert the complaint with the image into MongoDB
        result = collection.insert_one(complaint_data)
        return {"message": "Complaint with image added", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error inserting data: {e}")

@app.get("/get_complaint/{complaint_id}", response_model=dict)
async def get_complaint(complaint_id: str):
    try:
        # Find the complaint by its ID
        complaint = collection.find_one({"_id": ObjectId(complaint_id)})
        if not complaint:
            raise HTTPException(status_code=404, detail="Complaint not found")

        # Convert ObjectId to string before returning
        complaint["_id"] = str(complaint["_id"])

        # If the complaint contains an image, return it as base64-encoded string
        if "image" in complaint:
            complaint["image"] = complaint["image"]  # Base64-encoded string

        return complaint
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving data: {e}")


@app.get("/get_complaints/", response_model=List[dict])
async def get_complaints():
    try:
        # Retrieve all documents from the collection
        complaints = list(collection.find({}))
        
        # Convert documents to a format suitable for response
        for complaint in complaints:
            complaint["_id"] = str(complaint["_id"])  # Convert ObjectId to string
            
            # If the complaint contains an image, keep it as base64-encoded string
            if "image" in complaint:
                complaint["image"] = complaint["image"]  # Base64-encoded string
        
        return complaints
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving data: {e}")
