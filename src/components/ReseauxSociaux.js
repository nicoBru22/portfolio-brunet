import React from "react";
import "../styles/ReseauxSociaux.css";
import Instagram from "../images/logo-instagram.jpg";
import Facebook from "../images/logo-facebook.png";
import LinkedIn from "../images/logo-linkedin.png";

function ReseauxSociaux() {
    return(
        <div className="reseauxSociaux">
            <div className="contactRS">Me contacter sur les réseaux sociaux !</div> 
            <div className="divLogoRS">
                <a href="https://www.facebook.com/profile.php?id=100010513450207" target="_blank">
                    <img src={Facebook} alt="Logo de Facebook" className="logoRéseauxSociaux"></img>
                </a>
            </div>
            <div className="divLogoRS">
                <a href="https://www.instagram.com/_nico_bnt/" target="_blank">
                    <img src={Instagram} alt="Logo d'Instagram" className="logoRéseauxSociaux"></img>
                </a>
            </div>
            <div className="divLogoRS">
                <a href="https://www.linkedin.com/in/nicolasbrunet1" target="_blank">
                    <img src={LinkedIn} alt="Logo de LinkedIn" className="logoRéseauxSociaux" />
                </a>
            </div>
        </div>
    );
}

export default ReseauxSociaux;