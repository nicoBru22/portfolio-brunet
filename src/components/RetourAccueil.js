import React from "react";
import { Link } from "react-router-dom";

function RetourAccueil() {
    return (
        <div>
            <Link to="/portfolio-brunet">
                <div>Retour vers la page d'accueil</div>
            </Link>
        </div>
    );
}

export default RetourAccueil;