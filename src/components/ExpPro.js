import React from "react";
import ElementFormation from "./ElementFormation";
import "../styles/AutresFormations.css";

function ExpPro() {
    return(
        <div className="elementsCartes">

            <ElementFormation 
                intitule={"Conseiller Technique Fédéral"}
                organisme={"Comité Départemental Sport Adapté 35"}
                periode={"09/2013-12/2013"}
                mission={"Missions : Coordination, Gestion du calendrier sportif, Animation de séance"}/>
            <ElementFormation 
                intitule={"Enseignant en Activité Physique Adaptée"}
                organisme={"Handisport Cote d'Emeraude"}
                periode={"01/2014-09-2016"}
                mission={"Missions : Préparation et Animation de séance"}/>
            <ElementFormation 
                intitule={"Enseignant en Activité Physique Adaptée"}
                organisme={"Gym Loisir Hirel + AS Saint Lunaire + Gym Loisir Hirel"}
                periode={"09/2013-06/2017"}
                mission={"Missions : Préparation et Animation de séance de fitness"}/>
            <ElementFormation 
                intitule={"Réserviste Opérationnel"}
                organisme={"Gendarmerie Nationale"}
                periode={"Depuis 2021"}/>
            <ElementFormation 
                intitule={"Enseignant en Activité Physique Adaptée"}
                organisme={"Centre Hospitalier de Saint Malo"}
                periode={"02/2014-Aujourd'hui"}
                mission={"Missions : Rééducation neuro-locomoteur, Education Thérapeutique, Diabétologie, EHPAD, Consultations"}/>
        </div>
    );
}

export default ExpPro;