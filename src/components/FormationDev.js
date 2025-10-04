import React from "react";
import ElementFormation from "./ElementFormation";

function FormationDev() {
    return(
        <div className="elementsCartes">
            <ElementFormation 
                intitule={"Développeur Web (Bac+2)"}
                organisme={"Open Classroom"}
                periode={"2023-2024"}/>
            <ElementFormation 
                intitule={"Développeur Java (Bac+3)"}
                organisme={"Open Classroom"}
                periode={"2024-2025"}/>

        </div>
    );
}

export default FormationDev;