import React from "react";
import '../styles/Formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

function Formulaire(){
    return(
        <div className="divForm">
            <div className="divF">
                <form 
                    action="mailto:brunet.nicolas35@gmail.com?subject=Formulaire de contact du site Portfolio BRUNET Nicolas" 
                    method="post" 
                    encType="text/plain" 
                    className="formulaireContact">

                    <div className="labelInput">
                        <label htmlFor="name">
                            <FontAwesomeIcon icon={faUser} className="iconForm"/>   
                        </label>
                        <input 
                            type="text" 
                            id="name"
                            name="Nom et prénom"
                            placeholder="Exemple : DUPONT Jean">
                        </input>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="email">
                            <div  className="iconForm">@</div>
                        </label>
                        <input 
                            type="text" 
                            id="email"
                            name="adresse mail"
                            placeholder="Exemple : dupont-jean@gmail.com">
                        </input>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="phone">
                            <FontAwesomeIcon icon={faPhone} className="iconForm" />   
                        </label>
                        <input 
                            type="text" 
                            id="phone"
                            name="Numéro de téléphone"
                            placeholder="Exemple : 0678******">
                        </input>
                    </div>
                    <div className="labelInput textareaContainer"> 
                        <label htmlFor="message">
                            <FontAwesomeIcon icon={faEnvelope} className="iconForm" />
                        </label>
                        <textarea 
                            id="message"
                            name="Votre message"
                            className="messageForm"
                            placeholder="C'est votre espace pour me dire ce que vous pensez. Commencez à taper et faites moi savoir comment je peux vous aider."
                        />
                    </div>
                    <div className="divButtonForm">
                        <button className="buttonForm" type="submit">Envoyer le message</button>
                        <div className="divMessagerie">En cliquant sur envoyer vous ouvrirez votre client de messagerie avec le message pré-rempli</div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Formulaire;