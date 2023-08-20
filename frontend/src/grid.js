import React from "react";

function Grid({ letters }) {
  return (
    <div className="grid">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((letter, colIndex) => (
            <div key={colIndex} className="cell">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
