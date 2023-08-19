from flask import Flask, jsonify, request
from backend.gamesdl import game_logic
app = Flask(__name__)


@app.route('/')
def index():
    return app.send_static_file("index.html")


@app.route('/api/start_game', methods=['POST'])
def start_game():
    """
    Starts a new game and returns the initial game state.
    """
    initial_state = game_logic.start_new_game()
    return jsonify(initial_state)


@app.route('/api/make_move', methods=['POST'])
def make_move():
    """
    Accepts a move from the client, updates the game state, and returns the updated state.
    """
    move = request.json['move']
    updated_state = game_logic.make_move(move)
    return jsonify(updated_state)


if __name__ == "__main__":
    app.run(debug=True)
