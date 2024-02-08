import React, { useState } from "react";
import WordContext from "./WordContext";

function WordProvider({ children }) {
  const [strickenWords, setStrickenWords] = useState([]);
  const [gameEnded, setGameEnded] = useState(false); // New state for game status
  const [gameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(0);


  const strikeWord = (word) => {
    setStrickenWords((prevWords) => [...prevWords, word]);
  };

  const endGame = () => {
    setGameEnded(true); // Function to end the game
    setGameStarted(false);
  };

  const startGame = () => {
    setGameEnded(false);
    setGameStarted(true);
  };

  return (
    <WordContext.Provider value={{ strickenWords, strikeWord, gameEnded, endGame, startGame, time, setTime, gameStarted }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider;
