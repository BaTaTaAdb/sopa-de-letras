import React, { useState } from "react";
import WordContext from "./WordContext";

function WordProvider({ children }) {
  const [strickenWords, setStrickenWords] = React.useState([]);
  const [gameEnded, setGameEnded] = useState(false); // New state for game status


  const strikeWord = (word) => {
    setStrickenWords((prevWords) => [...prevWords, word]);
  };

  const endGame = () => {
    setGameEnded(true); // Function to end the game
  };

  return (
    <WordContext.Provider value={{ strickenWords, strikeWord, gameEnded, endGame }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider;
