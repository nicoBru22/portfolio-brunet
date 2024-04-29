import React from "react";
import '../styles/BlocAccueil.css';
import picture from "../images/photo-presentation-brunet-nicolas.jpg";

function BlocAccueil(){
    return(
        <div className="blocAccueil">
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
        
    );
}

export default BlocAccueil;