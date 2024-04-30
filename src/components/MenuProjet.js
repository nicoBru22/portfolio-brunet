import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
    return (
        <nav className='menu'>
            <ul className='ulMenu'>
                <li><Link to="/portfolio-brunet" className='elementMenu'>Accueil</Link></li>
                <li><Link to="/portfolio-brunet#sectionPresentation" className='elementMenu'>Présentation</Link></li>
                <li><Link to="/portfolio-brunet#sectionProjet" className='elementMenu'>Projet</Link></li>
                <li><Link to="/portfolio-brunet#sectionCompetence" className='elementMenu'>Compétence</Link></li>
                <li><Link to="/portfolio-brunet#sectionServices" className='elementMenu'>Services</Link></li>
                <li><Link to="/portfolio-brunet#sectionContact" className='elementMenu'>Contact</Link></li>
                <li><Link to="/portfolio-brunet#cv" className='elementMenu'>Mon CV</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;