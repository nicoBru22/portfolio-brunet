import React from "react";
import BlocAccueil from "../components/BlocAccueil";
import TitreSection from "../components/PropTitreSection";

function SectionAccueil(){
    return(
        <section id="sectionAccueil" style={{ height: "100vh"}}>
            <TitreSection 
                titreSection="Accueil"
            />
            <BlocAccueil />
        </section>
    );
}

export default SectionAccueil