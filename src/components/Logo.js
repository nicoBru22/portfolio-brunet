import React from "react";
import LogoBn from "../images/logo-Brunet-Nicolas-Developpeur-Web.png";
import "../styles/Logo.css"

function Logo() {
    return(
        <div>
            <img className="logo" src={LogoBn} alt="Logo professionnel de Nicolas BRUNET" title="Logo professionnel de Nicolas BRUNET"/>
        </div>
    );
}

export default Logo;