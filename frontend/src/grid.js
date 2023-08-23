import React from "react";

function Grid({ letters }) {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="justify-center flex py-4 px-4">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} class="">
            {row.map((letter, colIndex) => (
              <div class="h-10 w-10 text-2xl aspect-w-1 aspect-h-1 flex hover:bg-slate-300 justify-center items-center border-black border hover:cursor-pointer select-none">
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
