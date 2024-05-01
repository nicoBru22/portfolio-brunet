import React from "react";
import "../styles/Referencement.css";

function Referencement() {
    return(
        <div className="contenuRefenrecement">
            <div className="explicationSEO">Le SEO est un ensemble de techniques visant à améliorer 
                la visibilité et le classement d'un site web dans les 
                résultats des moteurs de recherche
            </div>
            <div className="listeReferencement">
                <div className="elementSEO">
                    <li className="elementListeReferencement"><strong>Optimisation du contenu :</strong></li>
                    <div className="divSEO">Créer un contenu de qualité, pertinent et unique qui répond 
                        aux besoins des utilisateurs et qui est optimisé pour les 
                        mots-clés recherchés.
                    </div>
                </div>
                <div className="elementSEO">
                    <li className="elementListeReferencement"><strong>Optimisation technique :</strong></li>
                    <div className="divSEO">Améliorer la structure et la convivialité du site web pour 
                        les moteurs de recherche, y compris la vitesse de chargement, 
                        la navigation, la balise de titre, la méta-description, les 
                        balises d'en-tête (H1, H2, etc.), les URL conviviales, etc.
                    </div>
                </div>
                <div className="elementSEO">
                    <li className="elementListeReferencement"><strong>Optimisation hors-page :</strong></li>
                    <div className="divSEO">Gagner des liens entrants de qualité provenant d'autres sites 
                        web pertinents (backlinks) pour renforcer l'autorité et la 
                        crédibilité du site web.
                    </div>
                </div>
                <div className="elementSEO">
                    <li className="elementListeReferencement"><strong>Optimisation locale :</strong></li>
                    <div className="divSEO">Optimiser le site web pour les recherches locales, y compris 
                        la création et l'optimisation d'une page Google My Business, 
                        l'utilisation de mots-clés locaux, etc.
                    </div>
                </div>
                <div className="elementSEO">
                    <li className="elementListeReferencement"><strong>Optimisation responsive :</strong></li>
                    <div className="divSEO">Assurer que le site web est compatible avec les appareils mobiles 
                        et offre une expérience utilisateur optimale sur les smartphones 
                        et les tablettes.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Referencement;