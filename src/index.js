import React from "react";
import ReactDOM from "react-dom";
import Goals from "./Goals/Goals";
import SearchBar from "./Componentes/SearchBar/SearchBar";
import "./index.css";

import { useState } from "react";

function App() {

  const [total, totalGoals] = useState(0)

  return (
    <div>
      <SearchBar total={total}/>
      <Goals totalGoals={totalGoals}/>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
