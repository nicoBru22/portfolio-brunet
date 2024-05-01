import React from "react";
import TitreSection from "../components/PropTitreSection";
import CollapseServices from "../components/CollapseServices";
import "../styles/SectionServices.css";


function SectionServices(){
    return(
        <section id="sectionServices" className="sectionService">
            <TitreSection 
                titreSection="Mes services"
                soustitreSection="Des prestation adaptées à vos besoins"
            />
            <CollapseServices />
        </section>
    );
}

export default SectionServices;