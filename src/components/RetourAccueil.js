import React from "react";
import { Link } from "react-router-dom";
import "../styles/RetourAccueil.css"

function RetourAccueil() {
    return (
        <div>
            <Link to="/portfolio-brunet">
                <button className="buttonRetourAccueil">Retour vers la page d'accueil</button>
            </Link>
        </div>
    );
}

export default RetourAccueil;