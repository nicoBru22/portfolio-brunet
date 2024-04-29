import React from "react";
import Presentation from "../components/Presentation.js";
import PropTitreSection from "../components/PropTitreSection.js";
import "../styles/SectionPresentation.css";
import CartesFormation from "../components/CarteFormation.js";


function SectionPresentation(){
    return(
        <section id="sectionPresentation">
            <PropTitreSection 
                titreSection="Présentation"
            />
            <Presentation />
            <CartesFormation />
        </section>
    );
}

export default SectionPresentation;