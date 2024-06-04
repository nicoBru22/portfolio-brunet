import React from 'react';
import { Link } from 'react-router-dom';
import cv from "../documents/cv-brunet-nicolas.pdf"
import '../styles/Menu.css';

function Menu() {
    return (
        <nav className='menu'>
            <ul className='ulMenu'>
                <li><Link to="/portfolio-brunet" className='elementMenu'>Accueil</Link></li>
                <li>|</li>
                <li><Link to="/portfolio-brunet#sectionPresentation" className='elementMenu'>Présentation</Link></li>
                <li>|</li>
                <li><Link to="/portfolio-brunet#sectionProjet" className='elementMenu'>Projet</Link></li>
                <li>|</li>
                <li><Link to="/portfolio-brunet#sectionCompetence" className='elementMenu'>Compétence</Link></li>
                <li>|</li>
                <li><Link to="/portfolio-brunet#sectionServices" className='elementMenu'>Services</Link></li>
                <li>|</li>
                <li><Link to="/portfolio-brunet#sectionContact" className='elementMenu'>Contact</Link></li>
                <li>|</li>
                <li><a href={cv} className='elementMenu' download>Mon CV</a></li>
            </ul>
        </nav>
    );
}

export default Menu;