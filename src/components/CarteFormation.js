import React from "react";
import CarteRetournement from "./CarteRetournement";
import AutresExperiences from "./AutresExperiences";
import AutresFormations from "./AutresFormations";
import FormationDev from "./FormationDev";
import "../styles/CarteFormation.css";

function CartesFormation(){
    return(
        <div className="cartes">
            <CarteRetournement
                titreCarte={"Formation Informatique"}
                contenuCarte={<FormationDev />}/>  
            <CarteRetournement
                titreCarte={"Autres formations"}
                contenuCarte={<AutresFormations />}/>
            <CarteRetournement
                titreCarte={"Expériences Hors Entreprises"}
                contenuCarte={<AutresExperiences />}/>
        </div>
    );
}

export default CartesFormation;