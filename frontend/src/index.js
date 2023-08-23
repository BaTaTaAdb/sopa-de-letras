import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Grid from "./grid.js";
import Title from "./title";

const App = () => {
  const letters = [
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "f", "g", "h", "i", "j"],
  ];

  return (
    <div className="app">
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
reportWebVitals();
