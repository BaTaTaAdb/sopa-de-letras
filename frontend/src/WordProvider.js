import React from "react";
import WordContext from "./Context";

function WordProvider({ children }) {
  const [strickenWords, setStrickenWords] = React.useState([]);

  const strikeWord = (word) => {
    setStrickenWords((prevWords) => [...prevWords, word]);
  };

  return (
    <WordContext.Provider value={{ strickenWords, strikeWord }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider;
