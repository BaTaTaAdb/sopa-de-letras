from flask import Flask
from gamesdl import game_logic as gl
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")


@app.get('/')
def root():
    return {"message": "Hello World"}


@app.get('/get-session')
async def get_session():
    letters, words = gl.get_board_and_words()
    letters = [list(x) for x in letters]
    return {"letters": letters, "words": words}


if __name__ == "__main__":
    app.run(port=8000)
