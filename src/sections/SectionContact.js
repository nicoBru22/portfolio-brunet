import React from "react";
import Formulaire from "../components/Formulaire.js";
import PropTitreSection from "../components/PropTitreSection.js";
import ReseauxSociaux from "../components/ReseauxSociaux.js";
import "../styles/SectionContact.css";

function SectionContact(){
    return(
        <section id="sectionContact" style={{backgroundColor: "#bfbfbf"}}>
                        <PropTitreSection
                titreSection="Contact"
            />
            <div className="contactForm">
                <ReseauxSociaux />
                <Formulaire />
            </div>
        </section>
    );
}

export default SectionContact;