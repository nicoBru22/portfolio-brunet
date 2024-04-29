import React from "react";
import Projets from "../components/Projet";
import PropTitreSection from "../components/PropTitreSection";

function SectionProjet(){
    return(
        <section id="sectionProjet">
            <PropTitreSection
                titreSection="Projets Réalisés"
            />
            <Projets />
        </section>
    );
}

export default SectionProjet;