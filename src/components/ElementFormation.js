import React from "react";
import "../styles/ElementFormation.css"

function ElementFormation({ lien, intitule, organisme, periode }) {
    return(
        <div className="elementFormation">
            <a href={lien} className="lienExt">
                <div className="intitule">{intitule}</div>
                <div className="organisme">{organisme}</div>
                <div className="periode">{periode}</div>
            </a>
        </div>
    );
}

export default ElementFormation;