with open("nouns.txt", "r") as file:
    words = file.readlines()
    # print(words[0:50])
    corrected_words = [word for word in words if len(
        word.split()) == 1 and len(word) < 10 and len(word) > 4]

with open("corrected_words.txt", "w") as file:
    file.writelines(corrected_words)

print("done.")
