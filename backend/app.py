from flask import Flask
from gamesdl import game_logic as gl
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000",
     "http://127.0.0.1:3000", "http://10.7.154.235:3000"])


@app.get('/')
def root():
    return {"message": "Hello World"}


@app.get('/get-session')
async def get_session():
    letters, words = gl.get_board_and_words()
    letters = [list(x) for x in letters]
    return {"letters": letters, "words": words}


if __name__ == "__main__":
    app.run(debug=True, port=8000)
