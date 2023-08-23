import React, { useState, useRef } from "react";

function Grid({ letters }) {
  const [selected, setSelected] = useState([]);
  const isMouseDown = useRef(false);

  const toggleSelect = (rowIndex, colIndex) => {
    const id = `${rowIndex}-${colIndex}`;
    if (isMouseDown.current && !selected.includes(id)) {
      setSelected([...selected, id]);
    }
  };

  return (
    <div
      id="grid"
      className="flex justify-center items-center h-screen"
      onMouseDown={() => (isMouseDown.current = true)}
      onMouseUp={() => (isMouseDown.current = false)}
      onMouseLeave={() => (isMouseDown.current = false)}
    >
      <div className="bg-[#D2DAFF] justify-center flex border border-white">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={`h-12 w-12 text-2xl font-extrabold text-gray-800 aspect-w-1 aspect-h-1 flex
                ${
                  selected.includes(`${rowIndex}-${colIndex}`)
                    ? "bg-[#793FDF]"
                    : ""
                }
                hover:bg-[#B1B2FF] justify-center items-center border 
                border-white hover:cursor-pointer select-none transition-colors duration-300`}
                onMouseOver={() => toggleSelect(rowIndex, colIndex)}
                onMouseDown={() => {
                  isMouseDown.current = true;
                  toggleSelect(rowIndex, colIndex);
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Grid;
