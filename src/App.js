import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (color === "black") {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
    }
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="App">
      <h1>Changing The color bitch</h1>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        RED
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        BLUE
      </button>
      <button
        onClick={() => {
          setColor("black");
        }}
      >
        BLACK
      </button>
      <button
        onClick={() => {
          setColor("yellow");
        }}
      >
        YELLOW
      </button>
      <button
        onClick={() => {
          setColor("pink");
        }}
      >
        PINK
      </button>
      <button
        onClick={() => {
          setColor("purple");
        }}
      >
        PURPLE
      </button>
    </div>
  );
}

export default App;
