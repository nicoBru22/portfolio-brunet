import React from "react";
import "../styles/CreationSiteWeb.css";

function CreationSiteWeb() {
    return(
        <div className="contenuCreationWeb">
            <div className="accrocheCreationWeb">Vous souhaitez avoir une présence en ligne professionnelle et personnalisée ? <a href="#sectionContact"> Je suis là pour vous aider !</a></div>
            <div>Mon service de création de site web sur mesure comprend :</div>
            <div className="listeCreationWeb">
                <div className="elementCreationWeb">
                    <li className="elementListeCreationWeb"><strong>Écoute attentive de vos besoins et objectifs</strong></li>
                    <div className="divCreationWeb">Je prends le temps de comprendre vos besoins spécifiques afin de créer un site web qui correspond parfaitement à votre vision et à vos objectifs.</div>
                </div>
                <div className="elementCreationWeb">
                    <li className="elementListeCreationWeb"><strong>Développement personnalisé pour répondre à vos spécifications</strong></li>
                    <div className="divCreationWeb">Je développe votre site web en utilisant les dernières technologies et les meilleures pratiques pour garantir un fonctionnement optimal et une expérience utilisateur exceptionnelle.</div>
                </div>
                <div className="elementCreationWeb">
                    <li className="elementListeCreationWeb"><strong>Mise en ligne et assistance</strong></li>
                    <div className="divCreationWeb">Une fois votre site web terminé, je m'occupe de la mise en ligne pour vous. Je vous offre également une assistance continue pour répondre à toutes vos questions et vous aider à maintenir votre site à jour.</div>
                </div>
                <div className="elementCreationWeb">
                    <li className="elementListeCreationWeb"><strong>Test approfondi sur différents appareils et navigateurs</strong></li>
                    <div className="divCreationWeb">Avant la mise en ligne, je teste minutieusement votre site web sur différents appareils et navigateurs pour m'assurer qu'il fonctionne correctement et qu'il offre une expérience utilisateur optimale.</div>
                </div>
            </div>
        </div>
    );
}

export default CreationSiteWeb;