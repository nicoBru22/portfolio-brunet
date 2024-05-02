import React from "react";
import ElementFormation from "./ElementFormation";
import "../styles/AutresFormations.css";

function AutresFormations() {
    return(
        <div className="elementsCartes">
            <ElementFormation 
                intitule={"Licence STAPS-APAS"}
                organisme={"Université Rennes 2"}
                periode={"2009-2013"}/>
            <ElementFormation 
                intitule={"Licence Psychologie"}
                organisme={"Université Rennes 2"}
                periode={"2016-2019"}/>
            <ElementFormation 
                intitule={"Premiers Secours en Santé Mentale"}
                organisme={"PSSM France"}
                periode={"2022"}/>
            <ElementFormation 
                intitule={"Formateur PRAP 2S"}
                organisme={"INRS"}
                periode={"2023-2024"}/>
        </div>
    );
}

export default AutresFormations;