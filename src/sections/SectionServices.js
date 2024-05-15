import React from "react";

import TitreSection from "../components/PropTitreSection";
import CartesServices from "../components/CartesServices";

import "../styles/SectionServices.css";


function SectionServices(){
    return(
        <section id="sectionServices" className="sectionService">
            <TitreSection 
                titreSection="Mes services"
                soustitreSection="Des prestation adaptées à vos besoins"
            />
            <CartesServices />
        </section>
    );
}

export default SectionServices;