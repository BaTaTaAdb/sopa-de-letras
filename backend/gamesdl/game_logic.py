import random as r
import numpy as np


class Word:
    # Class with all useful properties of the words
    def __init__(self, word) -> None:
        orientation = r.choice([(0,1), (0,-1), (1,0), (-1,0), (1,1), (-1,1), (1,-1), (-1,-1)])
        self.word = word
        self.orientation = orientation
        self.size = len(word)
        self.coords = []


def check_letters(word, board):
    # Function that checks whether a word is fit to cross with another word and if so returns the coordinates of the intersection
    y = 0
    for row in board:
        x = 0
        for letter in row:
            if letter in word.word and letter != "":
                index_in_word = word.word.find(letter)
                proposed_x = x - index_in_word * word.orientation[0]
                proposed_y = y - index_in_word * word.orientation[1]
                
                if 0 <= proposed_x + word.orientation[0] * (word.size - 1) < 15 and 0 <= proposed_y + word.orientation[1] * (word.size - 1) < 15:
                    if check_placement(board, word, proposed_x, proposed_y, (x, y)):
                        return (proposed_x, proposed_y)
            x += 1
        y += 1
    return False 

def check_placement(board, word, x, y, coords_skip=None):
    # Function that checks whether a new word will collide unintentionally with a previously placed word
    for letter in word.word:
        if not (0 <= x < 15 and 0 <= y < 15):  # Check bounds
            return False
        if board[x, y] != "" and (x, y) != coords_skip and board[x, y] != letter:
            return False
        x += word.orientation[0]
        y += word.orientation[1]
    return True


def get_board_and_words():   
    x, y = 0,0
    board = np.zeros((15, 15), dtype=str)
    answers = []

    with open("words.txt", "r") as f:
        # Creates a list with the words that the player will have to find
        possible_words = f.readlines()
        words = []
        while len(words) < 10:
            exit = False
            Random_Word = Word(r.choice(possible_words).strip())
            if Random_Word.size > 10:
                continue
            for letter in Random_Word.word:
                if letter.lower() not in ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t" , "u", "v", "w", "x", "y", "z", "ç", "á", "à", "ã" , "õ", "ó", "ú", "é", "ê", "â"]:
                    exit = True
            if exit:
                continue
            words.append(Random_Word)


    time = 0  # Variable that will keep track of how many times the following loop has been run

    for word in words:
        # loop that will find where to place the words on the board and place them
        condition = False
        if not time % 2 == 0:
            coords = check_letters(word, board)
            if coords == False:
                condition = True
            else:
                x = coords[0]
                y = coords[1]
        
        if time % 2 == 0:

            condition = True

        while time % 2 == 0 or condition:
            # loop that will find the placement of the first word and of words that do not cross with other words
            x = r.randint(0, 14)
            y = r.randint(0, 14)
            if word.orientation[0] * word.size < 14 - x and word.orientation[1] * word.size < 14 - y:
                if word.orientation[0] < 0:
                    if word.size > x:
                        continue
                if word.orientation[1] < 0:
                    if word.size > y:
                        continue
                if check_placement(board, word, x, y):
                    break
        
        
        
        for letter in word.word:
            # loop that places the letters of the word on the board
            board[x, y] = letter.upper()
            word.coords.append((x,y))
            x += 1*word.orientation[0]
            y += 1*word.orientation[1]
        time += 1
        answers.append({f"{word.word}" : {"coords" : word.coords}})
        

    for y, row in enumerate(board):
        for x, position in enumerate(row):
            if position == "":
                board[y,x] = r.choice(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t" , "u", "v", "w", "x", "y", "z", "ç", "á", "à", "ã" , "õ", "ó", "ú", "é", "ê", "â"]).upper()
    
    return (board, answers)






