import React from "react";
import Formulaire from "../components/Formulaire.js";
import TitreSection from "../components/PropTitreSection.js";
import ReseauxSociaux from "../components/ReseauxSociaux.js";
import "../styles/SectionContact.css";

function SectionContact(){
    return(
        <section id="sectionContact">
            <TitreSection
                titreSection="Contact"
                soustitreSection="N'hésitez pas à me contacter via le formulaire !"
            />
            <div className="contactForm">
                <ReseauxSociaux />
                <Formulaire />
            </div>
        </section>
    );
}

export default SectionContact;