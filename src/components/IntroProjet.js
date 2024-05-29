import React from "react";
import "../styles/Element-projet.css"

function IntroProjet(props){
    return (
        <div className="ElementProjet">
            <div className="ResumeProjet">
                <h1 className="titreProjetPage">{props.titreProjet}</h1>
                <h2 className="objectifsProjet">{props.objectifs}</h2>
                <h2 className="technosProjet">{props.technos}</h2>
            </div>
        </div>
    );
}

export default IntroProjet;