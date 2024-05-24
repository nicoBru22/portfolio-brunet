import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Formulaire.css';

function Formulaire() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Remplacez 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', et 'YOUR_USER_ID' par vos identifiants EmailJS

        emailjs.sendForm('service_gv2ueek', 'template_p6shyoz', form.current, 'K9zzm2pMDL7ijx4q_FbPe')
            .then((result) => {
                console.log(result.text);
                alert("Message envoyé avec succès !");
            }, (error) => {
                console.log(error.text);
                alert("Une erreur s'est produite, veuillez réessayer.");
            });
    };

    return (
        <div className="divForm">
            <div className="divF">
                <form ref={form} onSubmit={sendEmail} className="formulaireContact">

                    <div className="labelInput">
                        <label htmlFor="name">
                            <FontAwesomeIcon icon={faUser} className="iconForm" />
                            <span className="sr-only">Votre nom et prénom</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Exemple : DUPONT Jean"
                            required>
                        </input>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="email">
                            <div className="iconForm">@</div>
                            <span className="sr-only">Votre Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Exemple : dupont-jean@gmail.com"
                            required>
                        </input>
                    </div>
                    <div className="labelInput">
                        <label htmlFor="phone">
                            <FontAwesomeIcon icon={faPhone} className="iconForm" />
                            <span className="sr-only">Votre numéro de téléphone</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Exemple : 0678******"
                            required>
                        </input>
                    </div>
                    <div className="labelInput textareaContainer">
                        <label htmlFor="message">
                            <FontAwesomeIcon icon={faEnvelope} className="iconForm" />
                            <span className="sr-only">Votre message</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="messageForm"
                            placeholder="C'est votre espace pour me dire ce que vous pensez. Commencez à taper et faites moi savoir comment je peux vous aider."
                            required>
                        </textarea>
                    </div>
                    <div className="divButtonForm">
                        <button className="buttonForm" type="submit" alt="bouton pour envoyer le formulaire par mail">Envoyer le message</button>
                        <div className="divMessagerie">En cliquant sur envoyer, votre message sera envoyé directement par email.</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulaire;
