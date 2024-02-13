import React, { useState } from "react";
import WordContext from "./WordContext";


function WordProvider({ children }) {
  const [strickenWords, setStrickenWords] = useState([]);
  const [gameEnded, setGameEnded] = useState(false); // New state for game status
  const [gameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(5 * 60);
  const [showingMainMenu, showMainMenu] = useState(false);
  const [triggerBoard, setTriggerBoard] = useState(false);
  // State to track right grids
  const [rightGrids, setRightGrids] = useState([]);

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
    setStrickenWords([]);
    setRightGrids([]);
  };

  const loadNewBoard = () => {
    setTriggerBoard(true);
    console.log("Triggered Board")
  };

  return (
    <WordContext.Provider value={{ strickenWords, strikeWord, gameEnded, endGame, startGame, time, setTime, gameStarted, showingMainMenu, showMainMenu, triggerBoard, loadNewBoard, setTriggerBoard, rightGrids, setRightGrids }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider;
