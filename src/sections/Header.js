import React, { useState, useEffect } from 'react';

import Menu from '../components/Menu';
import Logo from '../components/Logo';
import TitreHeader from '../components/TitreHeader';
import MenuHamburger from '../components/MenuHamburger';

import '../styles/Header.css';

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
            <Menu />
            <MenuHamburger />
        </div>
    );
}

export default Header;