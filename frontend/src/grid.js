import React, { useState, useRef } from "react";

function Grid({ letters, words }) {
  // State for selected cells and their order
  const [selected, setSelected] = useState([]);
  const [orderOfSelection, setOrderOfSelection] = useState([]);
  const [positionOfSelection, setPositionOfSelection] = useState([]);
  // State for the direction in which user is currently selecting
  const [orientation, setOrientation] = useState(null);
  // Ref to track if the mouse button is pressed down
  const isMouseDown = useRef(false);

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
      const listWord = listFormat[0].join("");

      // Convert the listFormat coordinates to the format used in WORDS for comparison
      const convertedListCoords = listFormat[1].map((coord) => [
        coord.x,
        coord.y,
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
          { x: rowIndex, y: colIndex },
        ]);
      }
    }
  };
  // Function to clear the current selection
  const clearSelection = () => {
    // TODO: Add here the API fetching!
    if (orderOfSelection.length !== 0) {
      console.log("Order of selected letters:", orderOfSelection);
      console.log("Position of selected letters:", positionOfSelection); // Logs the positions of selected letters
    }
    // TODO: Confirm if the word exists in order
    if (compareCoordsAndWord(words, [orderOfSelection, positionOfSelection])) {
      console.log("YOOOOOOOOOOOO! WORDS AND STUFF!!");
    }
    setSelected([]);
    setOrderOfSelection([]);
    setPositionOfSelection([]); // Clear positionOfSelection
    setOrientation(null); // Reset orientation on mouse release
  };

  return (
    <div
      id="grid"
      className="flex justify-between items-center h-screen"
      onMouseUp={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection when mouse button is released
      }}
      onMouseLeave={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection once the mouse leaves the grid
      }}
    >
      <div className="justify-center flex">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={`h-14 w-14 text-3xl font-extrabold text-gray-800 aspect-w-1 aspect-h-1 flex
                ${
                  selected.includes(getId(rowIndex, colIndex))
                    ? "bg-[#793FDF]"
                    : "bg-[#D2DAFF]"
                }
                 hover:bg-[#B1B2FF] rounded-md justify-center items-center border 
                border-white hover:cursor-pointer select-none transition-colors duration-300`}
              >
                <div
                  className="w-8 h-8 flex justify-center items-center" // This is the smaller hitbox
                  onMouseOver={() => toggleSelect(rowIndex, colIndex)}
                  onMouseDown={() => {
                    isMouseDown.current = true;
                    toggleSelect(rowIndex, colIndex);
                  }}
                >
                  {letter}
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
