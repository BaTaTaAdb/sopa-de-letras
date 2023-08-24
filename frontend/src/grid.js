import React, { useState, useRef } from "react";

function Grid({ letters }) {
  const [selected, setSelected] = useState([]);
  const [orderOfSelection, setOrderOfSelection] = useState([]);
  const [orientation, setOrientation] = useState(null);
  const isMouseDown = useRef(false);

  const getOrientation = (start, end) => {
    const dr = end.row - start.row;
    const dc = end.col - start.col;
    if (dr === 0) return "horizontal";
    if (dc === 0) return "vertical";
    if (Math.abs(dr) === Math.abs(dc)) return "diagonal";
    return null;
  };

  const getId = (rowIndex, colIndex) => `${rowIndex}-${colIndex}`;

  const isValidSelection = (rowIndex, colIndex) => {
    if (!selected.length) return true;

    const [lastRow, lastCol] = selected[selected.length - 1]
      .split("-")
      .map(Number);
    const currentOrientation = getOrientation(
      { row: lastRow, col: lastCol },
      { row: rowIndex, col: colIndex }
    );

    if (selected.length === 1) {
      // set the orientation on the second selection
      setOrientation(currentOrientation);
      return true;
    }

    return currentOrientation === orientation;
  };

  const toggleSelect = (rowIndex, colIndex) => {
    const id = getId(rowIndex, colIndex);
    if (isMouseDown.current) {
      if (!selected.includes(id) && isValidSelection(rowIndex, colIndex)) {
        setSelected((prev) => [...prev, id]);
        setOrderOfSelection((prev) => [...prev, letters[rowIndex][colIndex]]);
      }
    }
  };

  const clearSelection = () => {
    console.log("Order of selected letters:", orderOfSelection); // Logs the order of selected letters
    setSelected([]);
    setOrderOfSelection([]);
  };

  return (
    <div
      id="grid"
      className="flex justify-center items-center h-screen"
      onMouseUp={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection
        setOrientation(null); // NEW: Reset orientation on mouse leave
        setOrderOfSelection([]);
      }}
      onMouseLeave={() => {
        isMouseDown.current = false;
        clearSelection(); // Clear the selection
        setOrientation(null); // NEW: Reset orientation on mouse leave
        setOrderOfSelection([]);
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
