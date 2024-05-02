import React from 'react';
import Header from '../sections/Header.js';
import SectionAccueil from '../sections/SectionAccueil.js';
import SectionPresentation from '../sections/SectionPresentation.js';
import SectionCompetences from '../sections/SectionCompétence.js';
import SectionProjets from '../sections/SectionProjets.js';
import SectionContact from '../sections/SectionContact.js';
import SectionServices from '../sections/SectionServices.js';
import Footer from '../sections/Footer.js';
import MetaData from '../components/MetaData.js';
import Banner from '../components/Banner.js';
import Paysage1 from "../images/paysage1.jpg";
import Paysage2 from "../images/paysageMars.webp";
import Paysage3 from "../images/paysageForet.webp";
import Paysage4 from "../images/paysageFantastic.webp";

function HomePage() {
    return (
        <div>
            <MetaData />
            <noscript>
                <iframe 
                    src="https://www.googletagmanager.com/ns.html?id=GTM-TLFVDNV5"
                    height="0" width="0" 
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
            <Header />
            <SectionAccueil />

            <SectionPresentation />
            <Banner
                imageUrl={Paysage2}
                accroche="Explorez mes projets et laissez-vous captiver par l'ingéniosité qui se cache derrière chaque ligne de code. Chaque site web est une histoire à découvrir."
            />
            <SectionCompetences />
            <Banner
                imageUrl={Paysage3}
                accroche="Dans l'écheveau du web, chaque clic ouvre 
                    une porte vers l'inconnu, où les idées se 
                    croisent et se réinventent."
            />
            <SectionProjets />
            <Banner
                imageUrl={Paysage4}
                accroche="Le travail est le reflet de l'âme, un moyen 
                    par lequel nous sculptons notre destinée et 
                    donnons forme à notre existence"
            />
            <SectionServices />
            <Banner
                imageUrl={Paysage1}
                accroche="La curiosité est le moteur de la connaissance, 
                    un feu sacré qui anime l'esprit et éclaire le 
                    chemin vers de nouveaux horizons."
            />
            <SectionContact />
            <Footer />
        </div>
    );
}

export default HomePage;
