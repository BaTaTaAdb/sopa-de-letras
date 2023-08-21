import React from "react";

function Grid({ letters }) {
  return (
    <div class="grid gap-0">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} class="flex">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              class="flex-1 aspect-w-1 aspect-h-1 border p-2 text-center"
            >
              <div class="aspect-square flex justify-center items-center">
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
