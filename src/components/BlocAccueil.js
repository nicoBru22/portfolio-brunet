import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import logoResponsive from "../images/cafe.webp"
import picture from "../images/photo-presentation-brunet-nicolas.webp";

import '../styles/BlocAccueil.css';

function BlocAccueil(){
    return(
        <div className="parallaxContainer">
            <div className="blocAccueil">
                <div className="divImgAccueil">
                    <img 
                    src={picture} className="imgAccueil" 
                    alt="Nicolas BRUNET les bras croisés" 
                    title="Portrait de présentation de Nicolas BRUNET">
                    </img>
                </div>

                <div className="superposition">
                    <div className="accrocheImage">
                        <div className="blocAccroche">
                            <div className="blocParagraphe">
                                <h2 className="metier">
                                    Développeur Web
                                </h2>
                            </div>
                            <div className="logoResponsive">
                                <img 
                                    src= {logoResponsive} 
                                    className="logoAccueil" 
                                    alt="Logo de l'entreprise de Brunet Nicolas, développeur web"
                                    title="logo de l'entreprise"
                                    loading="lazy">
                                </img>
                            </div>
                            <div>
                                <div className="bienvenue">
                                    "Envie de transformer vos idées en réalité ?  
                                    <br/>Laissez-moi donner vie à votre vision ! 
                                    <br/>Contactez-moi pour démarrer cette aventure ensemble."
                                </div>                 
                                <div className="boutonContact">
                                    <a href="#sectionContact" className="meContacter" >Me contacter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="versSection">
                        <div className="phraseSavoir">
                            Si vous préférez en savoir plus avant de me contacter, je vous invite à cliquer sur un des boutons ci-dessous !
                        </div>
                        <div className="boutonsSections">
                            <div className="boutonContact">
                                    <a href="#sectionPresentation" className="meContacter" >Qui suis-je ?</a>
                            </div>
                            <div className="boutonContact">
                                    <a href="#sectionCompétence" className="meContacter" >Compétences ?</a>
                            </div>
                            <div className="boutonContact">
                                    <a href="#sectionServices" className="meContacter" >Services ?</a>
                            </div>
                            <div className="boutonContact">
                                    <a href="#sectionProjet" className="meContacter" >Projets ?</a>
                            </div>
                        </div>
                    </div>
                    <div className="divFleche">
                        <a href="/portfolio-brunet#sectionPresentation" aria-label="Aller à la section Présentation">
                            <div className="divIconFlecheS">
                                <FontAwesomeIcon icon={faArrowDown} className="iconeFlecheBas" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlocAccueil;