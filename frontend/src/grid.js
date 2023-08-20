import React from "react";

function Grid({ letters }) {
  return (
    <div className="container">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((letter, colIndex) => (
            <div key={colIndex} className="cell col text-center py-2">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
