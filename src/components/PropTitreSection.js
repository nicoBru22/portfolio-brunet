import React from "react";

import "../styles/PropTitreSection.css"

function TitreSection(props){
    return(
        <div className="propTitreSection">
            <h1 className="titreSection">{props.titreSection}</h1>
            <h2 className="soustitreSection">{props.soustitreSection}</h2>
       </div>
    );
}

export default TitreSection;