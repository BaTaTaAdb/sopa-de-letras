import React, { useState, useRef, useContext } from "react";
import WordContext from "./WordContext";
import useSound from "use-sound";
import wrongSfx from "./public/wrong.mp3";
import rightSfx from "./public/right.mp3";

function Grid({ letters, words }) {
  // State for selected cells and their order
  const [selected, setSelected] = useState([]);
  const [orderOfSelection, setOrderOfSelection] = useState([]);
  const [positionOfSelection, setPositionOfSelection] = useState([]);
  // State for the direction in which user is currently selecting
  const [orientation, setOrientation] = useState(null);
  // Ref to track what sound effect is playing
  const audioRef = useRef(null);
  // Ref to track if the mouse button is pressed down
  const isMouseDown = useRef(false);
  // State to track right grids
  const [rightGrids, setRightGrids] = useState([]);
  // Get context of striked words
  const { strikeWord, strickenWords, endGame, gameEnded } = useContext(WordContext);
  const [playRightSound] = useSound(rightSfx, { volume: 0.5 });
  const [playWrongSound] = useSound(wrongSfx, { volume: 0.15 });

  if (!Array.isArray(letters)) {
    // Handle incorrect value of "letters"
    console.error(
      'Invalid prop "letters" provided to Grid. Expected an array.'
    );
    return null;
  }

  const compareCoordsAndWord = (wordsArray, listFormat) => {
    for (let wordObj of wordsArray) {
      // Extract word and coordinates from the current dictionary model
      const wordFromDict = Object.keys(wordObj)[0];
      const coordsFromDict = wordObj[wordFromDict].coords;

      // Convert word from list format to string format for comparison
      const listWord = listFormat[0].join("").toLowerCase();

      // Convert the listFormat coordinates to the format used in WORDS for comparison
      const convertedListCoords = listFormat[1].map((coord) => [
        coord.y,
        coord.x,
      ]);

      // Check comparison result
      if (
        wordFromDict === listWord &&
        JSON.stringify(coordsFromDict) === JSON.stringify(convertedListCoords)
      ) {
        return true;
      }
    }
    return false;
  };

  // Function to determine the direction of selection between two cells
  const getOrientation = (start, end) => {
    const dr = end.row - start.row;
    const dc = end.col - start.col;

    // Check for each possible direction and return its name
    // Horizontal
    if (dr === 0 && dc === 1) return "horizontal-right";
    if (dr === 0 && dc === -1) return "horizontal-left";
    // Vertical
    if (dr === 1 && dc === 0) return "vertical-down";
    if (dr === -1 && dc === 0) return "vertical-up";
    // Diagonal
    if (dr === 1 && dc === 1) return "diagonal-downright";
    if (dr === 1 && dc === -1) return "diagonal-downleft";
    if (dr === -1 && dc === 1) return "diagonal-upright";
    if (dr === -1 && dc === -1) return "diagonal-upleft";

    return null;
  };

  // Function to get a unique ID for each cell using its rowIndex and colIndex
  const getId = (rowIndex, colIndex) => `${rowIndex}-${colIndex}`;

  // Function to check if the current selection is in line with the ongoing direction
  const isValidSelection = (rowIndex, colIndex) => {
    if (!selected.length) return true;

    const [lastRow, lastCol] = selected[selected.length - 1]
      .split("-")
      .map(Number);
    const currentOrientation = getOrientation(
      { row: lastRow, col: lastCol },
      { row: rowIndex, col: colIndex }
    );

    // On the second selection, set the orientation/direction
    if (selected.length === 1) {
      setOrientation(currentOrientation);
      return true;
    }
    // For subsequent selections, check that they follow the set orientation
    return currentOrientation === orientation;
  };

  // Function to select or deselect a cell
  const toggleSelect = (rowIndex, colIndex) => {
    const id = getId(rowIndex, colIndex);
    if (isMouseDown.current) {
      if (!selected.includes(id) && isValidSelection(rowIndex, colIndex)) {
        setSelected((prev) => [...prev, id]);
        setOrderOfSelection((prev) => [...prev, letters[rowIndex][colIndex]]);

        // Update the positionOfSelection state here
        setPositionOfSelection((prev) => [
          ...prev,
          { x: colIndex, y: rowIndex },
        ]);
      }
    }
  };

  // Function to clear the current selection
  const clearSelection = () => {
    if (orderOfSelection.length >= 2) {
      const wordToCheck = orderOfSelection.join("").toLowerCase();
      if (
        compareCoordsAndWord(words, [orderOfSelection, positionOfSelection])
      ) {
        // Check if the word is not already striked
        if (!strickenWords.includes(wordToCheck)) {
          // Adds grid to the rightGrids list
          let newRightGrids = [...rightGrids];
          for (let i = 0; i < positionOfSelection.length; i++) {
            newRightGrids.push([
              positionOfSelection[i]["y"],
              positionOfSelection[i]["x"],
            ]);
          }
          // Defines new right Grids to change color
          setRightGrids(newRightGrids);
          // Plays sound effects
          // console.log("Played rightSfx");
          playRightSound();

          if (strickenWords.length + 1 === words.length) {
            endGame(true);
          }
          // Adds word to striken words list
          strikeWord(wordToCheck);
        }
      } else {
        // console.log("Played wrongSfx");
        playWrongSound();
      }
    }
    setSelected([]);
    setOrderOfSelection([]);
    setPositionOfSelection([]); // Clear positionOfSelection
    setOrientation(null); // Reset orientation on mouse release
  };

  // Function to get the correct letter positions
  const getCorrectLetterPositions = () => {
    let positions = [];
    words.forEach(wordObj => {
      const word = Object.keys(wordObj)[0];
      const coords = wordObj[word].coords;
      positions.push(...coords);
    });
    return positions;
  };

  // Function that return the className of each grid
  const getCellClassName = (rowIndex, colIndex) => {
    let classNames = "h-12 w-12 text-3xl font-extrabold text-gray-800 aspect-w-1 aspect-h-1 flex rounded-md justify-center items-center border border-white hover:cursor-pointer select-none transition-colors duration-300";

    const id = getId(rowIndex, colIndex);

    if (selected.includes(id)) {
      classNames += " bg-[#793FDF]";
    } else if (rightGrids.some(arr => arr[0] === rowIndex && arr[1] === colIndex)) {
      classNames += " bg-green-500";
    } else if (gameEnded && getCorrectLetterPositions().some(coord => coord[0] === rowIndex && coord[1] === colIndex)) {
      classNames += " bg-green-500";
    } else {
      classNames += " bg-[#D2DAFF] hover:bg-[#B1B2FF]";
    }

    return classNames;
  };

  return (
    <div
      id="grid"
      className="flex justify-between"
      onMouseUp={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection when mouse button is released
      }}
      onMouseLeave={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection once the mouse leaves the grid
      }}
    >
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/wrong.mp3`} />
      <div className="justify-center flex">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={getCellClassName(rowIndex, colIndex)}
              >
                <div
                  className="w-8 h-8 flex justify-center items-center" // This is the smaller hitbox
                  onMouseOver={() => toggleSelect(rowIndex, colIndex)}
                  onMouseDown={() => {
                    isMouseDown.current = true;
                    toggleSelect(rowIndex, colIndex);
                  }}
                >
                  {`${gameEnded &&
                    !rightGrids.some(
                      (arr) => arr[0] === rowIndex && arr[1] === colIndex
                    ) && !getCorrectLetterPositions().some(coord => coord[0] === rowIndex && coord[1] === colIndex)
                    ? ""
                    : letter
                    }`}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
