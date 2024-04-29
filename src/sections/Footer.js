import React from 'react';
import '../styles/Footer.css';

function Footer(){
    return(
        <div className='footer'>
            <div className='presentation'>
               <h2 className='presentationNom'>Brunet Nicolas, développeur web</h2>
               <div className='presentationObjet'>Création de site internet developpement web, 
               stratégies digitales, référencement à Dinan. </div>
            </div>
            <div className='coordonnees'>
                <h2 className='mesCoordonnees'>Mes coordonnées :</h2>
                <div className='coordonneesVille'>Dinan, 22000</div>
                <div className='coordonneesPays'>France</div>
                <div className='telephone'>Numéro de téléphone</div>
                <div className='adresseMail'>brunet.nicolas35@gmail.com</div>
            </div>
            <div className='mentionsLegales'>
                <h2>Mentions légales :</h2>
                <div>Site créé avec React</div>
                <div>@ Copyright | BRUNET Nicolas tous droits réservés </div>
            </div>
        </div>
    );
}

export default Footer;