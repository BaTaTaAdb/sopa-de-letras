import React, { useState } from "react";
import WordContext from "./WordContext";

function WordProvider({ children }) {
  const [strickenWords, setStrickenWords] = useState([]);
  const [gameEnded, setGameEnded] = useState(false); // New state for game status
  const [timerRunning, setTimerRunning] = useState(false);


  const strikeWord = (word) => {
    setStrickenWords((prevWords) => [...prevWords, word]);
  };

  const endGame = () => {
    setGameEnded(true); // Function to end the game
  };

  const startTimer = () => {
    setTimerRunning(true); // Function to start timer
  };

  const stopTimer = () => {
    setTimerRunning(false);
  }

  return (
    <WordContext.Provider value={{ strickenWords, strikeWord, gameEnded, endGame, timerRunning, startTimer, stopTimer }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider;
