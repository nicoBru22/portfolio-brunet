import React from "react";
import HeaderProjet from "../components/HeaderProjet";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";
import LigneInterElement from "../components/LigneInterElement";
import IntroProjet from "../components/IntroProjet";
import Image1 from "../images/Projets/Projet5-img1.png";
import Image2 from "../images/Projets/Projet5-img2.png";
import Image3 from "../images/Projets/Projet5-img3.png";
import "../styles/Element-projet.css"


function Projet5() {
    return (
        <div>
            <HeaderProjet />
            <IntroProjet
                titreProjet="Projet 5 : Location immobilière, KASA"
                objectifs="Création d'une application web de location immobilière pour l'entreprise KASA"
                technos="Langages et technologies utilisés : React, Sass, Node.js"
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                        A été développée une application web avec React, où un fichier JSON contenant les détails des logements à louer a été intégré . <br />
                        Sur la page d'accueil, nous pouvons retrouver des composants de cartes affichant le titre et la photo de chaque logement. <br />
                        En utilisant React Router, a été configuré la navigation de sorte que lorsque l'utilisateur clique sur une carte, 
                        il soit dirigé vers la page dédiée à ce logement.
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
                        Sur la page "À propos", ont été développées des fonctionnalités de collapse, qui permettent à l'utilisateur de révéler ou de masquer 
                        des sections de contenu avec des animations fluides lors de l'ouverture et de la fermeture. <br />
                        Ces collapses sont conçus de manière à être réutilisables dans d'autres parties de l'application, grâce à l'utilisation de props 
                        pour ajuster leur comportement et leur apparence selon les besoins.
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
                        Les données des logements ont été récupérées pour être intégrées dans l'application, en veillant à structurer les 
                        informations de manière claire et accessible. <br />
                        Ensuite, ont été mises en place des routes dynamiques, ce qui permet aux utilisateurs de naviguer aisément et de trouver 
                        rapidement un logement spécifique. <br />
                        Pour améliorer l'expérience visuelle, l'utilisation d'un carrousel a été intégrée pour la gestion des images, offrant 
                        ainsi une présentation attrayante et fluide des photos du logement. <br />
                        Enfin, les collapses, des composants interactifs permettant de révéler ou de masquer du contenu, pour 
                        organiser de manière efficace les informations sur différentes pages de l'application, garantissent ainsi une expérience 
                        utilisateur optimale.

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