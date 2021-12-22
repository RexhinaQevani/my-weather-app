import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://rexhinaqevani.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Rexhina Qevani
          </a>{" "}
          and is{" "}
          <a
            href="
          https://github.com/RexhinaQevani/my-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
