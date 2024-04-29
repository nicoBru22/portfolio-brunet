import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ElementProjet from "../components/Element-projet";
import RetourAccueil from "../components/RetourAccueil";


function Projet1() {
    return (
        <div>
            <Header />
            <ElementProjet />
            <ElementProjet />
            <ElementProjet />
            <RetourAccueil />

            <Footer />
        </div>
    );
}

export default Projet1;