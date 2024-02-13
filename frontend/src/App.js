import Grid from "./grid";
import React, { useState, useEffect, useContext } from "react";
import WordsList from "./wordsList";
import LoadingScreen from "./LoadingScreen";
import TopBar from "./TopBar";
import RightMenu from "./rightMenu";
import MenuOverlay from "./menuOverlay";
import ScoreOverlay from "./ScoreOverlay";
import WordContext from './WordContext';

const App = () => {
  // DEBUG ONLY
  console.log("Rendered");

  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading to true
  const [error, setError] = useState(null);
  const { triggerBoard, setTriggerBoard } = useContext(WordContext);

  // Generic fetch function
  console.log("Started fetching");
  useEffect(() => {
    if (triggerBoard || loading) {
      console.log(triggerBoard, loading)
      console.log("Game ended. Fetching new board...");

      // setLoading(true); // Show loading screen while fetching
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
    }
    setTriggerBoard(false);
  }, [triggerBoard, loading, setTriggerBoard]);

  if (loading) return <LoadingScreen />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col min-h-screen bg-[#EEF1FF]">
      <TopBar />
      <div className="gap-16 py-8 px-8 flex flex-row justify-center">
        <WordsList words={words} />
        <Grid letters={letters} words={words} />
        <RightMenu />
      </div>
      <MenuOverlay />
      <ScoreOverlay />
    </div >
  );
};

export default App;
