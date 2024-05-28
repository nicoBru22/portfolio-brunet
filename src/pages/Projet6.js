import React from "react";

import HeaderProjet from "../components/HeaderProjet";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";
import LigneInterElement from "../components/LigneInterElement";
import IntroProjet from "../components/IntroProjet";

import Image1 from "../images/Projets/Projet6-img1.webp";
import Image2 from "../images/Projets/Projet6-img2.webp";
import Image3 from "../images/Projets/Projet6-img3.webp";

import "../styles/Element-projet.css"
import "../styles/mediaQueries/Phone.css"
import "../styles/mediaQueries/Tablette.css"

function Projet6() {
    return (
        <div>
            <HeaderProjet />
            <IntroProjet
                titreProjet="Projet 6 : Libraire, Mon Vieux Grimoire"
                objectifs="Création du backend du site"
                technos="Langages et technologies utilisés : Express.js, MongoDB, bcrypt, Dotenv"
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                        J'ai développé une fonctionnalité d'authentification et de création de compte intégrant une base de données NoSQL MongoDB.  <br/>
                        Cette solution garantit la sécurité des données grâce au cryptage par bcrypt et la gestion des tokens pour renforcer 
                        l'authentification des utilisateurs.
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
                        J'ai mis en place un formulaire d'ajout de livre qui inclut des champs pour l'auteur, le titre et la date de publication. <br />
                        De plus, j'ai intégré une fonctionnalité permettant de télécharger et de redimensionner automatiquement les images en 
                        format WebP afin d'optimiser les performances du site. <br />
                        En outre, j'ai développé un système de notation des livres en fonction des utilisateurs pour enrichir l'expérience de la communauté.
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
                        J'ai implémenté la fonctionnalité permettant aux utilisateurs de modifier et de supprimer les livres qu'ils ont créés, 
                        en utilisant des tokens et l'identifiant unique du livre. <br />
                        De plus, j'ai intégré la possibilité pour les utilisateurs de noter les livres, ce qui génère une note moyenne. <br />
                        J'ai également restreint les votes des utilisateurs à une seule fois par livre. Ainsi, chaque utilisateur peut 
                        attribuer une note à un livre, contribuant ainsi à la note moyenne, mais ne peut pas voter plusieurs fois pour le même livre. <br />
                        Enfin, j'ai ajouté une fonctionnalité de tri des livres en fonction de leur note pour une expérience de navigation optimale.

                    </div>
                }
            />
            <LigneInterElement />
            <RetourAccueil />
            <Footer />
        </div>
    );
}

export default Projet6;