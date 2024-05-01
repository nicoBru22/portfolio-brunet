import React from "react";
import Projets from "../components/Projet";
import PropTitreSection from "../components/PropTitreSection";
import "../styles/SectionProjet.css";

function SectionProjet(){
    return(
        <section id="sectionProjet" className="sectionProjet">
            <PropTitreSection
                titreSection="Projets réalisés"
                soustitreSection="Voici une partie des projets sur lesquels j'ai travaillé"
            />
            <Projets />
        </section>
    );
}

export default SectionProjet;