import React from 'react';
import '../styles/Header.css';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import TitreHeader from '../components/TitreHeader';

function Header(){
    return(
        <div className='header'>
            <Logo />
            <TitreHeader />
            <Menu />
        </div>
    );
}

export default Header;