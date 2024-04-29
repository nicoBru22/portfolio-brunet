import React from "react";
import TitreSection from "../components/PropTitreSection";
import CollapseServices from "../components/CollapseServices";
import "../styles/SectionServices.css";


function SectionServices(){
    return(
        <section id="sectionServices">
            <TitreSection 
                titreSection="Mes services"
            />
            <div> Pourquoi vous auriez besoin de moi ?</div>
            <CollapseServices />
        </section>
    );
}

export default SectionServices;