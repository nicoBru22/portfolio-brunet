import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";
import Image1 from "../images/Projets/projet1-img1.png";
import Image2 from "../images/Projets/projet1-img2.png";
import Image3 from "../images/Projets/projet1-img3.png";
import "../styles/Element-projet.css"


function Projet1() {
    return (
        <div>
            <Header />
            <ElementProjet
                titreProjet="Projet 1 : Agence de voyage BOOKI"
                objectifs="ici seront placé les objectifs"
                technos="Langages utilisés : HTML et CSS"
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description="description du projet"
            />
            <ElementProjet
                classname="ImgExplicationInverse"
                imageUrl={Image2}
                imageDescription="capture d'écran du site de BOOKI"
                description="description du projet"
            />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image3}
                imageDescription="capture d'écran du site de BOOKI"
                description="description du projet"
            />
            <RetourAccueil />
            <Footer />
        </div>
    );
}

export default Projet1;