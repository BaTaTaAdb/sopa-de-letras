import Grid from "./Grid";
import Title from "./Title";
import React, { useState, useEffect } from "react";
import WordsList from "./wordsList";

const App = () => {
  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // Fetch letters from API
  useEffect(() => {
    fetch("http://localhost:8000/get-letters")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((letters) => {
        setLetters(letters);
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

  // Fetch words from API
  useEffect(() => {
    fetch("http://localhost:8000/get-words")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((words) => {
        setWords(words);
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
