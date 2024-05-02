import React from "react";
import monImage from "../images/photo-presentation-brunet-nicolas.jpg";
import '../styles/Presentation.css';

function Presentation(){
    return(
            <div className="divPresentation">
                <img src={monImage} className="imgPresentation" alt="Photographie cool de BRUNET Nicolas - Développeur Web" />
                <div className="txtPresentation">
                    Hey, je suis Nicolas BRUNET, développeur web junior. <br/>
                    <br/>Après une solide expérience de 10 années en tant qu'Enseignant 
                    en Activité Physique Adaptée où j'ai pu acquérir de nombreuses 
                    compétences telles que l'organisation, l'observation, la rigueur...
                    J'ai décidé de me réorienter vers le domaine du Développement Web. <br/>
                    <br/>En effet, toujours curieux, j'ai tout au long de mon parcours 
                    réalisé diverses formations et exploré divers domaines, je me suis 
                    découvert une passion pour pour l'informatique. J'ai par conséquent 
                    l'objectif de travailler dans ce milieu, c'est pourquoi j'ai 
                    je me suis formé avec Open Classroom en parallèle de mon premier métier. <br/>
                    <br/>Evidement, je ne compte pas en rester là et souhaite continuer 
                    à développer mes compétences pour les mettre aux services des autres.
                </div>
            </div>
    );
}

export default Presentation;