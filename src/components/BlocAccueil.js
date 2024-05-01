import React from "react";
import '../styles/BlocAccueil.css';
import picture from "../images/photo-presentation-brunet-nicolas.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function BlocAccueil(){
    return(
        <div className="blocAccueil">

            <div className="accrocheImage">
                <div className="blocAccroche">
                    <div className="blocParagraphe">
                        <h2 className="metier">
                            Développeur Web
                            <br/>à Dinan
                        </h2>
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

                <div className="divImgAccueil">
                    <img src={picture} className="imgAccueil" alt="Nicolas BRUNET les bras croisés" title="Portrait de présentation de Nicolas BRUNET"></img>
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
                                    <a href="#sectionCompétence" className="meContacter" >Compétences informatique ?</a>
                            </div>
                            <div className="boutonContact">
                                    <a href="#sectionServices" className="meContacter" >Services proposés ?</a>
                            </div>
                            <div className="boutonContact">
                                    <a href="#sectionProjet" className="meContacter" >Projets réalisés ?</a>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>
                    </div>
        </div>
        
    );
}

export default BlocAccueil;