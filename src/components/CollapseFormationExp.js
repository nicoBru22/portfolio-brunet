import React from "react";
import Collapse from "./Collapse";
import FormationDev from "./FormationDev";
import AutresFormations from "./AutresFormations";
import AutresExperiences from "./AutresExperiences";
import ExpPro from "./ExpPro";
import "../styles/CollapseFormExp.css";

function CollapseFormExp() {
    return(
        <div className="divCollapseFormExp">
            <Collapse 
                titre={"Formation Developpeur"}
                contenu={<FormationDev/>}
            />
            <Collapse 
                titre={"Autres formations"}
                contenu={<AutresFormations />}
            />
            <Collapse 
                titre={"Expériences professionnelles"}
                contenu={<ExpPro />}

            />
            <Collapse 
                titre={"Expériences associatives"}
                contenu={<AutresExperiences />}
            />
        </div>
    );
}

export default CollapseFormExp;