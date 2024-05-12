import React from 'react';
import '../styles/Footer.css';

function Footer(){
    return(
        <div className='footer'>
            <div className='presentation divFooter'>
               <h2 className='presentationNom'>Brunet Nicolas, développeur web</h2>
               <div className='presentationObjet'>Création de site internet developpement web, 
               stratégies digitales, référencement à Dinan. </div>
            </div>
            <div className='coordonnees divFooter'>
                <h2 className='mesCoordonnees'>Mes coordonnées :</h2>
                <div className='coordonneesVille'>Dinan, 22000</div>
                <div className='coordonneesPays'>France</div>
                <div className='telephone'>Numéro de téléphone</div>
                <div className='adresseMail'>brunet.nicolas35@gmail.com</div>
            </div>
            <div className='mentionsLegales divFooter'>
                <h2 className='mentionLegale'>Mentions légales :</h2>
                <div className='siteReact'>Site créé avec React</div>
                <div className='copyright'>@ Copyright | BRUNET Nicolas tous droits réservés </div>
            </div>
        </div>
    );
}

export default Footer;