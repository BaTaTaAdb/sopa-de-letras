import Grid from "./grid";
import Title from "./title";
import React, { useState, useEffect } from "react";
import WordsList from "./wordsList";
import WordProvider from "./WordProvider";
import LoadingScreen from "./LoadingScreen";

const App = () => {
  // DEBUG ONLY
  console.log("Rendered");

  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading to true
  const [error, setError] = useState(null);

  // Generic fetch function
  console.log("Started fetching");
  useEffect(() => {
    fetch("/api/get-session")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Ended fetching!");
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

  if (loading) return <LoadingScreen />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="app bg-[#EEF1FF]">
      <Title />
      <WordProvider>
        <div className="gap-4 px-8 flex flex-row items-center justify-center">
          <WordsList words={words} />
          <div className="invisible px-8">Boas! </div>
          <Grid letters={letters} words={words} />
        </div>
      </WordProvider>
    </div>
  );
};

export default App;
