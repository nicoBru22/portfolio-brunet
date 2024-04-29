import React from "react";
import '../styles/Formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

function Formulaire(){
    return(
        <div className="divForm">
            <div className="divF">
                <form className="formulaireContact">
                    <div className="labelInput">
                        <label>
                            <FontAwesomeIcon icon={faUser} className="iconForm"/>   
                        </label>
                        <input type="text" placeholder="Exemple : DUPONT Jean"></input>
                    </div>
                    <div className="labelInput">
                        <label>
                            <div  className="iconForm">@</div>
                        </label>
                        <input type="text" placeholder="Exemple : dupont-jean@gmail.com"></input>
                    </div>
                    <div className="labelInput">
                        <label>
                            <FontAwesomeIcon icon={faPhone} className="iconForm" />   
                        </label>
                        <input type="text" placeholder="Exemple : 0678******"></input>
                    </div>
                    <div className="labelInput textareaContainer"> 
                        <label>
                            <FontAwesomeIcon icon={faEnvelope} className="iconForm" />
                        </label>
                        <textarea 
                            className="messageForm" 
                            placeholder="C'est votre espace pour me dire ce que vous pensez. Commencez à taper et faites moi savoir comment je peux vous aider."
                        />
                    </div>
                </form>
                <div className="divButtonForm">
                    <button className="buttonForm">Envoyer le message</button>
                </div>
            </div>
        </div>
    );
}

export default Formulaire;