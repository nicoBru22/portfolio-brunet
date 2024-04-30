import React from "react";
import HeaderProjet from "../components/HeaderProjet";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";
import LigneInterElement from "../components/LigneInterElement";
import IntroProjet from "../components/IntroProjet";
import Image1 from "../images/Projets/Projet1-img1.png";
import Image2 from "../images/Projets/Projet1-img2.png";
import Image3 from "../images/Projets/Projet1-img3responsive.png";
import "../styles/Element-projet.css"


function Projet1() {
    return (
        <div>
            <HeaderProjet />
            <IntroProjet
                titreProjet="Projet 1 : Agence de voyage BOOKI"
                objectifs="Création de la page d'accueil du site BOOKI"
                technos="Langages utilisés : HTML et CSS"
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                    Le projet comprend une conception minutieuse du header, où le logo distinctif du site et une barre de navigation 
                    intuitive ont été intégrés avec soin.<br />
                    Un formulaire de recherche à également été élaboré, facilitant ainsi l'accès aux données pour les utilisateurs.<br />
                    Parallèlement à ces développements, ont été mises en place des fonctionnalités de filtrage, permettant un 
                    tri efficace des hébergements et des activités proposées sur la plateforme.<br />
                    Enfin, ont été conçues des cartes d'hébergement, organisées méticuleusement en fonction de leur localisation 
                    géographique et de leur niveau de popularité, offrant ainsi une expérience utilisateur optimale.<br />
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
                        Nous avons développé des cartes d'activités, organisées par ville, pour offrir une expérience de navigation ciblée. <br />
                        En parallèle, nous avons intégré un footer pour compléter l'expérience utilisateur et assurer une navigation fluide.
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
                        Nous avons créé un site responsive, parfaitement adapté tant à la version mobile qu'à celle de bureau. <br />
                        Les cartes d'activités sont conçues pour une expérience optimale sur les deux plateformes, et un header 
                        accompagné d'un footer ont été ajoutés pour une navigation fluide sur tous les appareils.
                    </div>
                }
            />
            <LigneInterElement />
            <RetourAccueil />
            <Footer />
        </div>
    );
}

export default Projet1;