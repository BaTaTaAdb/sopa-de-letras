import Grid from "./Grid";
import Title from "./Title";
import React from "react";

const App = () => {
  const letters = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  ];

  return (
    <div className="app bg-[#EEF1FF]">
      <Title />
      <Grid letters={letters} />
    </div>
  );
};

export default App;
