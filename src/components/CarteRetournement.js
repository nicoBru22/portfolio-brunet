import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

import "../styles/CarteRetournement.css";

function CarteRetournement({ titreCarte, contenuCarte }) {
    const [retournee, setRetournee] = useState(false);

    const handleClick = () => {
        setRetournee(!retournee);
    };

    return (
        <div className={`carteConteneur ${retournee ? 'retournee' : ''}`} onClick={handleClick}>
            <div className="carte">
                <div className={`carteRecto ${retournee ? 'cache' : ''}`}>
                    <div className="divIconeRetournement">
                        <FontAwesomeIcon icon={faUndo} className="iconeRetournement" />
                    </div>
                    <div className="titreCarte">{titreCarte}</div>
                    <div className="cliquez">Cliquez pour retourner cette carte</div>
                </div>
                <div className={`carteVerso ${retournee ? '' : 'cache'}`}>
                    <div className="contenuCarte">{contenuCarte}</div>
                </div>
            </div>
        </div>
    );
}

export default CarteRetournement;
