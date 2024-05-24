import React from "react";
import { Link } from "react-router-dom";
import LogoBn from "../images/logo-BN-75.webp";
import "../styles/Logo.css"

function Logo() {
    return(
        <div>
            <Link to="/portfolio-brunet#sectionAccueil">
                <img className="logo" src={LogoBn} alt="Logo professionnel de Nicolas BRUNET" title="Logo professionnel de Nicolas BRUNET"/>
            </Link>
        </div>
    );
}

export default Logo;