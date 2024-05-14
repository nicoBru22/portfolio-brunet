import React from "react";

import "../styles/Element-projet.css"
import "../styles/mediaQueries/Phone.css";
import "../styles/mediaQueries/Tablette.css";

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
                    <div className="descriptionProjet">{props.description}</div>
                </div>
            </div>
        </div>
    );
}

export default ElementProjet;