import React from "react";

function Grid({ letters }) {
  return (
    <div id="grid" className="flex justify-center items-center h-screen">
      <div className="bg-[#D2DAFF] justify-center flex border border-white">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className="h-12 w-12 text-2xl font-extrabold text-gray-800 aspect-w-1 aspect-h-1 flex
                hover:bg-[#B1B2FF] justify-center items-center border 
                border-white hover:cursor-pointer select-none transition-colors duration-300"
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
