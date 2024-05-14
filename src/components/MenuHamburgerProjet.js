import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../styles/MenuHamburger.css";

function MenuHamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menuHamburger">
            <button className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={isOpen ? 'menu-items open' : 'menu-items'}>
                <li><Link to="/portfolio-brunet" className='elementMenu'>Accueil</Link></li>
                <li><Link to="/portfolio-brunet#sectionPresentation" className='elementMenu'>Présentation</Link></li>
                <li><Link to="/portfolio-brunet#sectionProjet" className='elementMenu'>Projet</Link></li>
                <li><Link to="/portfolio-brunet#sectionCompetence" className='elementMenu'>Compétence</Link></li>
                <li><Link to="/portfolio-brunet#sectionServices" className='elementMenu'>Services</Link></li>
                <li><Link to="/portfolio-brunet#sectionContact" className='elementMenu'>Contact</Link></li>
                <li><Link to="/portfolio-brunet#cv" className='elementMenu'>Mon CV</Link></li>
            </ul>
        </div>
    );
}

export default MenuHamburger;