import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "../styles/MenuHamburger.css";

function MenuHamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="menuHamburger">
            <button className="hamburger" onClick={toggleMenu} aria-label='Ouvre le menu sur tablette et sur téléphone'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={isOpen ? 'menu-items open' : 'menu-items'}>
                <li><a href="#sectionAccueil" className='elementMenu' onClick={closeMenu}>Accueil</a></li>
                <li><a href="#sectionPresentation" className='elementMenu' onClick={closeMenu}>Présentation</a></li>
                <li><a href="#sectionProjet" className='elementMenu' onClick={closeMenu}>Projet</a></li>
                <li><a href="#sectionCompetence" className='elementMenu' onClick={closeMenu}>Compétence</a></li>
                <li><a href="#sectionServices" className='elementMenu' onClick={closeMenu}>Services</a></li>
                <li><a href="#sectionContact" className='elementMenu' onClick={closeMenu}>Contact</a></li>
                <li><a href="#cv" className='elementMenu' onClick={closeMenu}>Mon CV</a></li>
            </ul>
        </div>
    );
}

export default MenuHamburger;
