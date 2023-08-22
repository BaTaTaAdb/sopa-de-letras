import React from "react";

function Grid({ letters }) {
  return (
    <div class="h-2 flex gap-0">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} class="">
          {row.map((letter, colIndex) => (
            <div class="h-10 w-10 aspect-w-1 aspect-h-1 flex hover:bg-slate-300 justify-center items-center border hover:cursor-pointer select-none">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
