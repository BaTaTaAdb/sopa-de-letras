import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Grid from "./grid.js";
import Title from "./title";

const App = () => {
  const letters = [
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
    ["A", "B", "C", "D", "F", "G", "H", "I", "J"],
  ];

  return (
    <div className="app bg-[#EEF1FF]">
      <Title />
      <Grid letters={letters} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
