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
                technos="Langages et technologies utilisés : React, Sass, Node.js"
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>

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