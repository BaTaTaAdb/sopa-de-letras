import React, { useState, useRef } from "react";

function Grid({ letters }) {
  // State for selected cells and their order
  const [selected, setSelected] = useState([]);
  const [orderOfSelection, setOrderOfSelection] = useState([]);
  // State for the direction in which user is currently selecting
  const [orientation, setOrientation] = useState(null);
  // Ref to track if the mouse button is pressed down
  const isMouseDown = useRef(false);

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
      }
    }
  };

  // Function to clear the current selection
  const clearSelection = () => {
    // TODO: Add here the API fetching!
    console.log("Order of selected letters:", orderOfSelection); // Logs the order of selected letters
    setSelected([]);
    setOrderOfSelection([]);
    setOrientation(null); // Reset orientation on mouse release
  };

  return (
    <div
      id="grid"
      className="flex justify-center items-center h-screen"
      onMouseUp={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection when mouse button is released
      }}
      onMouseLeave={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection once the mouse leaves the grid
      }}
    >
      <div className="bg-[#D2DAFF] justify-center flex border border-white">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={`h-12 w-12 text-2xl font-extrabold text-gray-800 aspect-w-1 aspect-h-1 flex
                ${
                  selected.includes(getId(rowIndex, colIndex))
                    ? "bg-[#793FDF]"
                    : ""
                }
                hover:bg-[#B1B2FF] justify-center items-center border 
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
