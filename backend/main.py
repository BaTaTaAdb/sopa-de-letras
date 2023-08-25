from fastapi import FastAPI
from gamesdl import game_logic as gl
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(debug=True)


origins = [
    "http://localhost:3000",
    "http://10.7.154.235",
    "http://127.0.0.1:3000"
]

"""app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)"""


@app.get('/')
async def root():
    return {"message": "Hello World"}


@app.get('/get-session')
async def get_session():
    letters, words = gl.get_board_and_words()
    letters = [list(x) for x in letters]
    return {"letters": letters, "words": words}
