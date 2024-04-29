import React from "react";
import PropTitreSection from "../components/PropTitreSection";
import Carousel from "../components/Carousel";
import BarreProgres from "../components/BarreProgres";
import "../styles/SectionCompetence.css"

function SectionCompetences(){
    return(
        <section id="sectionCompetence">
            <PropTitreSection
                titreSection="Skills - Mon panel de compétence"
            />
            <div className="divParagrapheProgres">
                <div className="paragrapheCompetence">
                    De la conception de sites web élégants à l'optimisation de performances côté 
                    serveur, je suis là pour concrétiser vos projets.
                    <br></br>Mes compétences englobent, entre autres, le développement front-end avec des technologies 
                    comme HTML, CSS, et JavaScript, ainsi que le développement back-end avec des langages tels 
                    que PHP8, Node.js.
                    <br></br>Explorez mes compétences ci-dessous et découvrez comment nous pouvons collaborer pour donner 
                    vie à vos projets web !
                    <div>
                        <div>Front-end : Html, Css, javascript, React</div>
                        <div>Back-end : Node.js, Express.js</div>
                        <div>Base de donnée : MongoDB</div>
                        <div>Referencement et SEO : Wave, Google Lighthouse, GT Metrix</div>
                    </div>
                </div>
                <BarreProgres />
            </div>


            <Carousel />
        </section>
    );
}

export default SectionCompetences;