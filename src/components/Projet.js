import React from "react";
import PropProjets from "./propProjets";
import imageProjet1 from "../images/Projets/Projet1-imgCard.png"
import imageProjet2 from "../images/Projets/Projet2-imgCard.png"
import imageProjet3 from "../images/Projets/Projet3-imgCard.png"
import imageProjet4 from "../images/Projets/Projet4-imgCard.png"
import imageProjet5 from "../images/Projets/Projet5-imgCard.png"
import imageProjet6 from "../images/Projets/Projet6-imgCard.png"
import '../styles/Projet.css';

function Projets(){
    return(
        <div className="projets">
                <PropProjets
                    to="/portfolio-brunet/projet1"
                    className="projet1"
                    titreProjet="BOOKI, agence de voyage"
                    imageUrl={imageProjet1}
                    imageDescription="Image du site"
                    descriptionProjet="Objectif : Développer la page d'accueil d'un site de voyage avec Html et Css."
                />
            <PropProjets
                to="/portfolio-brunet/projet2"
                className="projet2"
                titreProjet="Sophie BLUEL, architecte d'intérieur"
                imageDescription="Description de votre image"
                imageUrl={imageProjet2}
                descriptionProjet="Objectif : Développer la page d'accueil d'un site d'architecte avec Javascript."
            />
            <PropProjets
                to="/portfolio-brunet/projet3"
                className="projet3"
                titreProjet="Menu-Maker by Qwenta"
                imageUrl={imageProjet3}
                imageDescription="Description de votre image"
                descriptionProjet="Objectif : Développer le site d'une entreprise de création de menu de restaurant en ligne."
            />
            <PropProjets
                to="/portfolio-brunet/projet4"
                className="projet4"
                titreProjet="Nina Carducci, photographe"
                imageUrl={imageProjet4}
                imageDescription="Image du site"
                descriptionProjet="Objectif : Débugger et otpimiser un site de photographe."
            />
            <PropProjets
                to="/portfolio-brunet/projet5"
                className="projet5"
                titreProjet="KASA, location immobilière"
                imageUrl={imageProjet5}
                imageDescription="Image du site"
                descriptionProjet="Objectif : Créer une application web de location immobilière avec React."
            />
            <PropProjets
                to="/portfolio-brunet/projet6"
                className="projet6"
                titreProjet="Mon vieux grimoire, librairie"
                imageUrl={imageProjet6}
                imageDescription="Image du site"
                descriptionProjet="Objectif : Développer la partie Back-End du site avec Express.js."
            />
        </div>
    );
}

export default Projets;