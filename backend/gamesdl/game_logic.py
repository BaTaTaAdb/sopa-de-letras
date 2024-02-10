import random as r
import numpy as np


def check_placement(board, word, x, y, coords_skip=None):
    # Function that checks whether a new word will collide unintentionally with a previously placed word
    for letter in word.letters:
        if not (0 <= x < 15 and 0 <= y < 15):  # Check bounds
            return False
        if board[x, y] != "" and (x, y) != coords_skip and board[x, y] != letter:
            return False
        x += word.orientation[0]
        y += word.orientation[1]
    return True


class Word:
    def __init__(self, word) -> None:
        self.letters = word
        self.orientation = None
        self.size = len(word)
        self.coords = []


def check_possible_intersection(word, board, letter_positions):
    for i in range(len(word.letters)):
        if word.letters[i] in letter_positions:
            for x, y in letter_positions[word.letters[i]]:
                index_in_word = word.letters.find(word.letters[i])
                proposed_x = x - index_in_word * word.orientation[0]
                proposed_y = y - index_in_word * word.orientation[1]

                if 0 <= proposed_x and proposed_x + word.orientation[0] * (word.size - 1) < 15 and 0 <= proposed_y and proposed_y + word.orientation[1] * (word.size - 1) < 15:
                    if check_placement(board, word, proposed_x, proposed_y, (x, y)):
                        return (proposed_x, proposed_y)
    return False


def get_board_and_words():
    board = np.zeros((15, 15), dtype=str)
    answers = []
    letter_positions = {chr(i): [] for i in range(97, 123)}
    letter_positions['ç'] = []
    x, y = 0, 0

    valid_letters = set("abcdefghijklmnopqrstuvwxyzçáàãõóúéêâ")
    special_to_normal = {
        "á": "a", "à": "a", "ã": "a", "â": "a",
        "õ": "o", "ó": "o",
        "ú": "u",
        "é": "e", "ê": "e"
    }

    with open("corrected_words.txt", "r") as f:
        list_of_possible_words = f.readlines()
        board_words = []
        while len(board_words) < 10:
            choice = r.choice(list_of_possible_words)
            # Remove the chosen word to avoid duplicates
            list_of_possible_words.remove(choice)
            random_possible_word = Word(choice.strip())
            if random_possible_word.size > 10:
                continue

            word_set = set(random_possible_word.letters.lower())
            if not word_set.issubset(valid_letters):
                continue

            actual_word = "".join(special_to_normal.get(letter.lower(), letter.lower()) for letter in random_possible_word.letters)
            random_possible_word.letters = actual_word
            board_words.append(random_possible_word)

    time = 0
    orientations = [(0, 1), (0, -1), (1, 0), (-1, 0),
                    (1, 1), (-1, 1), (1, -1), (-1, -1)]
    for word in board_words:
        condition = False
        if not time % 2 == 0:
            word.orientation = r.choice(orientations)
            coords = check_possible_intersection(word, board, letter_positions)
            if coords == False:
                condition = True
            else:
                x, y = coords

        if time % 2 == 0 or condition:
            while True:
                word.orientation = r.choice(orientations)
                x = r.randint(0, 14)
                y = r.randint(0, 14)
                if check_placement(board, word, x, y):
                    break

        for letter in word.letters:
            board[x, y] = letter.upper()
            word.coords.append((x, y))
            if time % 2 == 0:
                letter_positions[letter].append((x, y))
            x += word.orientation[0]
            y += word.orientation[1]
        time += 1
        answers.append({f"{word.letters}": {"coords": word.coords}})

    fill_choices = list("abcdefghijklmnopqrstuvwxyzç".upper())
    empty_positions = np.where(board == "")
    board[empty_positions] = np.random.choice(fill_choices, len(empty_positions[0]))

    return (board, answers)
