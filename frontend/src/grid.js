import React from "react";

function Grid({ letters }) {
  return (
    <div class="h-2 grid gap-0">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} class="flex">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              class="flex-1 aspect-w-1 aspect-h-1 border-2 text-center"
            >
              <div class="duration-300 aspect-square flex justify-center items-center hover:bg-slate-300 hover:cursor-pointer select-none">
                {letter}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
