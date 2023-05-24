import React from "react";
import ReactDOM from "react-dom";
import Goals from "./Goals/Goals";
import SearchBar from "./Componentes/SearchBar/SearchBar";
import "./index.css"
function App() {
  return (
    <index>
      <SearchBar />
      <Goals />
    </index>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
