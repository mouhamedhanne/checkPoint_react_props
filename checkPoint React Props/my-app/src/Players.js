import React from "react";
//import Card from "react-bootstrap/Card";
//import ListGroup from "react-bootstrap/ListGroup";

const PlayerItem = ({ nom, team, nationnality, dossard, age, image }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title">{nom}</h5>
        <p className="card-text">
          Équipe : {team}
          <br />
          Nationalité : {nationnality}
          <br />
          Numéro de maillot : {dossard}
          <br />
          Âge : {age}
        </p>
      </div>
    </div>
  );
};

export default PlayerItem;
