import React from "react";
import Presentation from "../components/Presentation.js";
import PropTitreSection from "../components/PropTitreSection.js";
import "../styles/SectionPresentation.css";
import CollapseFormExp from "../components/CollapseFormationExp.js";


function SectionPresentation(){
    return(
        <section id="sectionPresentation" className="sectionPresentation">
            <PropTitreSection 
                titreSection="Présentation"
                soustitreSection="Découvrez qui je suis et faisons connaissance"
            />
            <Presentation />
            <CollapseFormExp />
        </section>
    );
}

export default SectionPresentation;