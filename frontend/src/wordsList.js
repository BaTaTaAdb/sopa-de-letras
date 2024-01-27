import React from "react";
import WordContext from "./WordContext";

function WordsList({ words }) {
  const { strickenWords } = React.useContext(WordContext);
  return (
    <div className="flex justify-center">
      <div className="px-6 py-4 bg-white rounded-lg shadow-lg">
        <ul>
          {words
            .map((item) => Object.keys(item)[0])
            .map((word, index) => (
              <li
                key={index}
                className={`text-3xl mb-2 
              ${strickenWords.includes(word)
                    ? "text-green-500 font-bold"
                    : "text-gray-800"
                  }`}
              >
                {word}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default WordsList;
