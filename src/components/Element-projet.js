import React from "react";
import "../styles/Element-projet.css"

function ElementProjet(props){
    return (
        <div className="ElementProjet">
            <div className="ResumeProjet">
                <h1 className="titreProjet">{props.titreProjet}</h1>
                <h2 className="objectifsProjet">{props.objectifs}</h2>
                <h2 className="technosProjet">{props.technos}</h2>
            </div>
            <div className={props.classname}>
                <div className="divImage">
                    <img
                        className="imageProjet" 
                        src={props.imageUrl}
                        alt={props.imageDescription}
                    />
                </div>
                <div className="explicationProjet">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ElementProjet;