import './App.css';
import Header from './sections/Header';
import SectionAccueil from './sections/SectionAccueil';
import SectionPresentation from './sections/SectionPresentation';
import SectionCompetences from './sections/SectionCompétence';
import SectionProjets from './sections/SectionProjets';
import SectionContact from './sections/SectionContact';
import SectionServices from './sections/SectionServices';
import Footer from './sections/Footer';
import MetaData from './components/MetaData';
import Banner from './components/Banner.js';
import Paysage1 from "../src/images/paysage1.jpg";
import Paysage2 from "./images/paysageMars.webp";
import Paysage3 from "./images/paysageForet.webp";
import Paysage4 from "./images/paysageFantastic.webp";

function App() {
  return (
    <div className="App">
      <MetaData />
      <Header />
      <SectionAccueil />
      <Banner
          imageUrl={Paysage1}
          accroche="La curiosité est le moteur de la connaissance, 
                    un feu sacré qui anime l'esprit et éclaire le 
                    chemin vers de nouveaux horizons."
      />
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
          accroche="Au-delà des écrans se cachent des récits 
                    d'inspiration et d'ingéniosité. Laissez-vous 
                    emporter dans un voyage où chaque clic révèle 
                    une nouvelle facette de mon travail."
      />
      <SectionContact />
      <Footer />
    </div>
  );
}

export default App;
