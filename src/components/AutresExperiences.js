import React from "react";
import ElementFormation from "./ElementFormation";

function AutresExpériences() {
    return(
        <div className="elementsCartes">
            <ElementFormation 
                intitule={"Président"}
                organisme={"Comité Départemental du Sport Adapté 35, CDSA 35"}
                periode={"Depuis 2020"}/>
            <ElementFormation 
                intitule={"Président"}
                organisme={"Ligue de Bretagne du Sport Adapté, LBSA"}
                periode={"Depuis 2022"}/>
            <ElementFormation 
                intitule={"Représentant Suppléant pour la Bretagne"}
                organisme={"Comité Paralympique Sportif Français, CPSF"}
                periode={"Depuis 2022"}/>
            <ElementFormation 
                intitule={"Membre (président de 2016 à 2018)"}
                organisme={"Rotaract Malouin, famille du Rotary"}
                periode={"Depuis 2016"}/>
        </div>
    );
}

export default AutresExpériences;