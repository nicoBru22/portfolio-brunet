import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

import "../styles/CarteRetournement.css";

function CarteRetournement({titreCarte, contenuCarte}) {
    return(
        <div className="carteConteneur">
            <div className="carte">
                <div className="carteRecto">
                    <div className="divIconeRetournement">
                        <FontAwesomeIcon icon={faUndo} className="iconeRetournement" />
                    </div>
                    <div className="titreCarte">{titreCarte}</div>
                </div>
                <div className="carteVerso">
                    <div className="contenuCarte">{contenuCarte}</div>
                </div>
            </div>
        </div>
    );
}

export default CarteRetournement;