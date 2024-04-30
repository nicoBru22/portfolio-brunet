import React from "react";
import "../styles/PropProjet.css";
import { Link } from 'react-router-dom';

function PropProjets(props) {
  return (
    <div className="projet">
      <Link to={props.to} >
        <div className={`elementProjet ${props.className}`}>
          <div className="titreProjet">{props.titreProjet}</div>
            <img
              className="imgProjet"
              src={props.imageUrl}
              alt={props.imageDescription}
            />
            <div className="enSavoirPlus">En savoir plus</div>
          </div>
        </Link>
      </div>
  );
}

export default PropProjets;