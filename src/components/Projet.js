import React from "react";
import PropProjets from "./propProjets";
import imageProjet3 from "../images/Projet3.jpg"
import '../styles/Projet.css';

function Projets(){
    return(
        <div className="projets">
            <a href="https://nicobru22.github.io/AgenceVoyageBooki/#">
                <PropProjets
                    className="projet1"
                    titreProjet="Site d'agence de voyage"
                    imageDescription="Image du site"
                    
                    descriptionProjet="Objectif : Développer la page d'accueil d'un site de voyage avec Html et Css."
                />
            </a>
            <PropProjets
                className="projet2"
                titreProjet="Site d'architecte"
                imageDescription="Description de votre image"
                imageUrl={imageProjet3}
                descriptionProjet="Objectif : Développer la page d'accueil d'un site d'architecte avec Javascript."
            />
            <PropProjets
                className="projet3"
                titreProjet="Site de Menu-Maker by Qwenta"
                imageDescription="Description de votre image"
                descriptionProjet="Objectif : Développer le site d'une entreprise de création de menu de restaurant en ligne."
            />
            <a href="https://nicobru22.github.io/projet5/">
                <PropProjets
                    className="projet4"
                    titreProjet="Site de photographe"
                    imageDescription="Image du site"
                    descriptionProjet="Objectif : Débugger et otpimiser un site de photographe."
                />
            </a>
            <PropProjets
                className="projet5"
                titreProjet="Site de location immobilière"
                imageDescription="Image du site"
                descriptionProjet="Objectif : Créer une application web de location immobilière avec React."
            />
            <PropProjets
                className="projet6"
                titreProjet="Site de notation de livre"
                imageDescription="Image du site"
                descriptionProjet="Objectif : Développer la partie Back-End du site avec Express.js."
            />
        </div>
    );
}

export default Projets;