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
  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch letters from API
  useEffect(() => {
    fetchData("http://localhost:8000/get-letters", setLetters);
  }, []);

  // Fetch words from API
  useEffect(() => {
    fetchData("http://localhost:8000/get-words", setWords);
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
