import React from 'react';
import '../styles/Menu.css';
import cv from "../documents/cv-brunet-nicolas.pdf"

function Menu() {
    return (
        <nav className='menu'>
            <ul className='ulMenu'>
                <li><a href="#sectionAccueil" className='elementMenu'>Accueil</a></li>
                <li>|</li>
                <li><a href="#sectionPresentation" className='elementMenu'>Présentation</a></li>
                <li>|</li>
                <li><a href="#sectionProjet" className='elementMenu'>Projet</a></li>
                <li>|</li>
                <li><a href="#sectionCompetence" className='elementMenu'>Compétence</a></li>
                <li>|</li>
                <li><a href="#sectionServices" className='elementMenu'>Services</a></li>
                <li>|</li>
                <li><a href="#sectionContact" className='elementMenu'>Contact</a></li>
                <li>|</li>
                <li><a href={cv} className='elementMenu' download>Mon CV</a></li>
            </ul>
        </nav>
    );
}

export default Menu;