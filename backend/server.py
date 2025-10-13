'''
Start server by running fastapi dev server.py
'''
import pixellab
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from PIL import Image

load_dotenv()

client = pixellab.Client(secret=os.environ.get("PIXEL_LAB_API_KEY"))

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/create-background-image")
async def createImage(screen_width:int,screen_height:int):
    screen_width = int(screen_width*400/max(screen_width,screen_height))
    screen_height = int(screen_height*400/max(screen_width,screen_height))
    season = ""
    month = datetime.now().month
    if month < 3 or month == 12:
        season = "winter"
    elif month < 6:
        season = "spring"
    elif month < 9:
        season = "summer"
    else:
        season = "fall"

    timeofday = ""
    hour = datetime.now().hour
    if hour < 5:
        timeofday = "midnight"
    elif hour < 7:
        timeofday = "dawn"
    elif hour < 12:
        timeofday = "morning"
    elif hour < 6:
        timeofday = "afternoon"
    elif hour < 9:
        timeofday = "dusk"
    else:
        timeofday = "midnight"
    response = client.generate_image_pixflux(
        description="fantasy background in "+season+" at "+timeofday,
        image_size={"width":screen_width, "height":screen_height},
    )
    img = response.image.pil_image()
    img.save("./src/images/background.png")