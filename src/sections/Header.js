import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import TitreHeader from '../components/TitreHeader';

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
        </div>
    );
}

export default Header;