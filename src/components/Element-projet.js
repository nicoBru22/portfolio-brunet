import React from "react";
import "../styles/Element-projet.css"

function ElementProjet(props){
    return (
        <div className="divElementProjet">
            <div className={props.classname}>
                <div className="divImage">
                    <img
                        className="imageProjet" 
                        src={props.imageUrl}
                        alt={props.imageDescription}
                    />
                </div>
                <div className="explicationProjet">
                    <p className="descriptionProjet">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ElementProjet;