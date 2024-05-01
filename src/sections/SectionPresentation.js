import React from "react";
import Presentation from "../components/Presentation.js";
import PropTitreSection from "../components/PropTitreSection.js";
import "../styles/SectionPresentation.css";
import CartesFormation from "../components/CarteFormation.js";


function SectionPresentation(){
    return(
        <section id="sectionPresentation" className="sectionPresentation">
            <PropTitreSection 
                titreSection="Présentation"
                soustitreSection="Découvrez qui je suis et faisons connaissance"
            />
            <Presentation />
            <CartesFormation />
        </section>
    );
}

export default SectionPresentation;