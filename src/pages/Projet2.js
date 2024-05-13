import React from "react";
import HeaderProjet from "../components/HeaderProjet";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";
import LigneInterElement from "../components/LigneInterElement";
import IntroProjet from "../components/IntroProjet";
import Image1 from "../images/Projets/Projet2-img1.png";
import Image2 from "../images/Projets/Projet2-img2.png";
import Image3 from "../images/Projets/Projet2-img3.png";
import "../styles/Element-projet.css"
import "../styles/mediaQueries/Phone.css"


function Projet5() {
    return (
        <div>
            <HeaderProjet />
            <IntroProjet
                titreProjet="Projet 2 : Portfolio de l'architecte d'intérieur, Sophie BLUEL"
                objectifs="Objectifs : Développer la page de présentation, la gestion de l'authentification et les appels API"
                technos="Langages et technologies utilisés : "
            />
            <LigneInterElement />
            <ElementProjet
                classname="ImgExplication"
                imageUrl={Image1}
                imageDescription="capture d'écran du site de BOOKI"
                description={
                    <div>
                        Une fois connecté, l'administrateur active le mode édition sur la page d'accueil, débloquant ainsi le 
                        bouton "Modifier". <br />
                        Ce système, basé sur la validation d'un token d'authentification, simplifie la gestion du contenu en permettant 
                        des modifications rapides et sécurisées, sans nécessiter d'interfaces complexes. <br/>
                        Cela garantit la pertinence et la sécurité du site, offrant aux administrateurs un contrôle direct sur 
                        les mises à jour nécessaires. <br />
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
                        Lorsque le bouton "Modifier" est activé, une fenêtre modale s'ouvre, présentant tous les projets disponibles. <br />
                        Chaque projet est accompagné d'une icône représentant une poubelle. <br />
                        Cette icône permet à l'utilisateur de supprimer un projet particulier en déclenchant un appel à l'API DELETE, 
                        ce qui entraîne la suppression effective du projet.
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
                        Pour faciliter l'ajout de nouveaux projets, j'ai créé une modale qui récupère les catégories existantes dans la base de données de l'API. <br />
                        En utilisant cette modale, l'administrateur peut sélectionner une catégorie nécéssaire pour les filtres, télécharger une photo 
                        avec une visualisation en direct et spécifier un titre pour le nouveau projet. <br /> 
                        Cette fonctionnalité offre une expérience conviviale et intuitive pour la gestion des projets.

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