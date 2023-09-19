import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        The Best Players
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
