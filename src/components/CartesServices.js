import React from "react";
import CarteRetournement from "./CarteRetournement";
import Referencement from "./Referencement";
import CreationSiteWeb from "./CreationSiteWeb";
import "../styles/CartesServices.css";

function CartesFormation(){
    return(
        <div className="cartes">
            <CarteRetournement
                titreCarte={"Création de site web"}
                contenuCarte={<CreationSiteWeb />}
            />  
            <CarteRetournement
                titreCarte={"Référencement et SEO"}
                contenuCarte={<Referencement />}
            />
        </div>
    );
}

export default CartesFormation;