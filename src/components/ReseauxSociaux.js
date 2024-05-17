import React from "react";
import "../styles/ReseauxSociaux.css";
import Instagram from "../images/logo-instagram.jpg";
import Facebook from "../images/logo-facebook.png";
import LinkedIn from "../images/logo-linkedin.png";

function ReseauxSociaux() {
    return(
        <div className="CoordonneesRS">
            <div className="coordonneesContact">
                <div className='coordonnees divFooter'>
                    <h2 className='mesCoordonnees'>Mes coordonnées :</h2>
                    <div className='coordonneesVille'>Dinan, 22000</div>
                    <div className='coordonneesPays'>France</div>
                    <div className='telephone'>Numéro de téléphone</div>
                    <div className='adresseMail'>brunet.nicolas35@gmail.com</div>
                </div>
            </div>
            <div className="reseauxSociaux">
                <h2 className="contactRS">Me contacter sur les réseaux sociaux !</h2> 
                <div className="logosReseaux">
                    <div className="divLogoRS">
                        <a href="https://www.facebook.com/profile.php?id=100010513450207" target="_blank" rel="noreferrer">
                            <img 
                                src={Facebook} 
                                alt="Logo de Facebook" 
                                className="logoRéseauxSociaux"
                                loading="lazy"></img>
                        </a>
                    </div>
                    <div className="divLogoRS">
                        <a href="https://www.instagram.com/_nico_bnt/" target="_blank" rel="noreferrer">
                            <img 
                                src={Instagram} 
                                alt="Logo d'Instagram" 
                                className="logoRéseauxSociaux"
                                loading="lazy"></img>
                        </a>
                    </div>
                    <div className="divLogoRS">
                        <a href="https://www.linkedin.com/in/nicolasbrunet1" target="_blank" rel="noreferrer">
                            <img 
                                src={LinkedIn} 
                                alt="Logo de LinkedIn" 
                                className="logoRéseauxSociaux"
                                loading="lazy"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReseauxSociaux;