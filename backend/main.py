from fastapi import FastAPI
from gamesdl import game_logic
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(debug=True)


origins = [
    "http://localhost:3000",
    "http://10.7.154.235",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)

LETTERS = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
]

WORDS = [{"AA": {"coords": [(0, 0), (0, 1)]}},
         {"BB": {"coords": [(1, 0), (1, 1)]}}]


@app.get('/')
async def root():
    return {"message": "Hello World"}


@app.get('/get-letters', response_model=list[list[str]])
async def get_letters():
    return LETTERS


@app.get('/get-words')
async def get_words():
    return WORDS
