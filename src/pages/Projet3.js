import React from "react";

import HeaderProjet from "../components/HeaderProjet";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";
import LigneInterElement from "../components/LigneInterElement";
import IntroProjet from "../components/IntroProjet";

import Image1 from "../images/Projets/Projet3-img1.webp";
import Image2 from "../images/Projets/Projet3-img2.webp";
import Image3 from "../images/Projets/Projet3-img3.webp";

import "../styles/Element-projet.css"
import "../styles/mediaQueries/Phone.css"
import "../styles/mediaQueries/Tablette.css"

function Projet5() {
    return (
        <div>
            <HeaderProjet />
            <IntroProjet
                titreProjet="Projet 3 : Menu-Maker by QWENTA"
                objectifs="Planification du développement du site Menu-Maker by QWENTA"
                technos="Langages et technologies utilisés : Feedly (veille), User stories, Trello (kanban), sécification techniques"
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                        Pour ce projet, j'ai mis en œuvre la méthode Agile afin de garantir une gestion efficace 
                        et flexible des tâches. Tout d'abord, j'ai étudié le site "Menu Maker by Qwenta" en détail 
                        pour comprendre ses fonctionnalités et besoins. Cette analyse m'a permis de créer des spécifications 
                        techniques précises et alignées avec les attentes de l'entreprise.<br />
                        Ensuite, j'ai développé une veille informatique via Feedly, en sélectionnant divers flux d'informations.
                        Ces flux couvraient plusieurs domaines essentiels tels que la sécurité informatique, le SEO, et les 
                        langages de programmation utilisés dans l'industrie. Cette veille m'a permis de rester informé des dernières 
                        tendances et innovations, contribuant ainsi à l'amélioration continue du projet.
                    </div>
                }
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplicationInverse"
                imageUrl={Image2}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                        Par ailleurs, j'ai pris connaissance des user stories existantes, qui décrivent les fonctionnalités du point 
                        de vue des utilisateurs finaux. J'ai enrichi cette base en ajoutant de nouvelles user stories, afin de mieux 
                        répondre aux besoins des utilisateurs et d'assurer une couverture fonctionnelle complète. <br />
                        Pour la gestion des tâches, j'ai mis en place un tableau Kanban sur Trello. Ce tableau était divisé en 
                        plusieurs colonnes : à faire, en cours, à tester, et à approuver. Cette organisation visuelle a facilité 
                        le suivi des tâches, la gestion des priorités et la collaboration au sein de l'équipe.
                    </div>
                }
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image3}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                        Enfin, pour clôturer le projet, j'ai réalisé une présentation sous forme de diaporama. Cette présentation 
                        comprenait l'ensemble des travaux réalisés, les étapes clés du projet, les résultats obtenus et les 
                        prochaines étapes recommandées. J'ai veillé à ce que le diaporama soit clair, concis et professionnel, 
                        afin de transmettre efficacement les informations à toutes les parties prenantes.
                    </div>
                }
            />
            <LigneInterElement />
            <RetourAccueil />
            <Footer />
        </div>
    );
}

export default Projet5;