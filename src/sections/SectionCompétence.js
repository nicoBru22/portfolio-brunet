import React from "react";
import PropTitreSection from "../components/PropTitreSection";
import Carousel from "../components/Carousel";
import BarreProgres from "../components/BarreProgres";
import "../styles/SectionCompetence.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faChalkboard, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function SectionCompetences(){
    return(
        <section id="sectionCompetence" className="sectionCompetence">
            <PropTitreSection
                titreSection="Mes compétences"
                soustitreSection="Plongez vous dans mes compétences et découvrez comment nous pouvons collaborer pour donner 
                vie à vos projets web !"
            />
                <div className="paragrapheCompetence">
                    <div className="competences">
                        <div className="competence">
                        <div className="titreTechno">
                                <h3 className="titreCompentence">Front-end :</h3>
                                <div className="technoCompetence">Html, Css, javascript, React</div>
                            </div>
                            <div className="divCercle">
                                <div className="cercle">
                                    <FontAwesomeIcon icon={faChalkboard} className="icone" />
                                </div>
                            </div>

                        </div>
                        <div className="competence">
                            <div className="titreTechno">
                                <h3 className="titreCompentence">Back-end :</h3>
                                <div className="technoCompetence">Node.js, Express.js</div>
                            </div>
                            <div className="divCercle">
                                <div className="cercle">
                                    <FontAwesomeIcon icon={faCode} className="icone" />
                                </div>
                            </div>

                        </div>
                        <div className="competence">
                        <div className="titreTechno">
                                <h3 className="titreCompentence">Base de donnée :</h3>
                                <div className="technoCompetence">MongoDB</div>
                            </div>
                            <div className="divCercle">
                                <div className="cercle">
                                    <FontAwesomeIcon icon={faDatabase} className="icone" />
                                </div>
                            </div>

                        </div>
                        <div className="competence">
                        <div className="titreTechno">
                                <h3 className="titreCompentence">Referencement et SEO :</h3>
                                <div className="technoCompetence">Wave, Google Lighthouse, GT Metrix</div>
                            </div>
                            <div className="divCercle">
                                <div className="cercle">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icone" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="divCarousel">
                        <Carousel />
                    </div>
                </div>

           

        </section>
    );
}

export default SectionCompetences;