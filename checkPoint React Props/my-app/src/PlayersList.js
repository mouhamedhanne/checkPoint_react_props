import React from "react";
import PlayerItem from "./Players";
import dataPlayers from "./DataPlayer";

const PlayersList = () => {
  return (
    <div className="container">
      <div className="row">
        {dataPlayers.map((joueur, id) => (
          <div key={id} className="col-md-4">
            <PlayerItem {...joueur} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
