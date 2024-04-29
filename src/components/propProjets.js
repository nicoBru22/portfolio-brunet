import React from "react";
import "../styles/PropProjet.css";

function PropProjets(props) {
  return (
    <div className="projet">
      <div className={`elementProjet ${props.className}`}>
        <div className="titreProjet">{props.titreProjet}</div>
          <img
            className="imgProjet"
            src={props.imageUrl}
            alt={props.imageDescription}
          />
          <div className="bulleInfo">{props.descriptionProjet}</div>
        </div>
      </div>
  );
}

export default PropProjets;