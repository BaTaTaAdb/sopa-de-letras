import Grid from "./grid";
//import Title from "./Title";
import React, { useState, useEffect } from "react";
import WordsList from "./wordsList";
import WordProvider from "./WordProvider";
import LoadingScreen from "./LoadingScreen";
import TopBar from "./TopBar";
import RightMenu from "./rightMenu";

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
    <div className="flex flex-col min-h-screen bg-[#EEF1FF]">
      <WordProvider>
        <TopBar />
        <div className="gap-16 py-8 px-8 flex flex-row justify-center">
          <WordsList words={words} />
          <Grid letters={letters} words={words} />
          <RightMenu />
        </div>
      </WordProvider >
    </div >
  );
};

export default App;
