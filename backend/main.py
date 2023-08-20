from fastapi import FastAPI
from gamesdl import game_logic

app = FastAPI()


@app.get('/')
async def root():
    return {"message": "Hello World"}
