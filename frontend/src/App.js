import Grid from "./Grid";
import Title from "./Title";
import React, { useState, useEffect } from "react";
import WordsList from "./wordsList";

const App = () => {
  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // Generic fetch function
  useEffect(() => {
    fetch("http://localhost:8000/get-session")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setLetters(data["letters"]);
        setWords(data["words"]);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="app bg-[#EEF1FF]">
      <Title />
      <div className="gap-4 px-8 flex flex-row items-center justify-center">
        <WordsList words={words} />
        <div className="invisible px-8">Boas! </div>
        <Grid letters={letters} words={words} />
      </div>
    </div>
  );
};

export default App;
