import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import MenuProjet from './MenuProjet';
import Logo from './Logo';
import TitreHeader from './TitreHeader';
import MenuHamburgerProjet from './MenuHamburgerProjet.js';

function Header(){
    const [isHeaderVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY;
            if (top === 0) {
                setHeaderVisible(true);
            } else {
                setHeaderVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={isHeaderVisible ? 'header hidden' : 'header'}>
            <Logo />
            <TitreHeader />
            <MenuProjet />
            <MenuHamburgerProjet />

        </div>
    );
}

export default Header;