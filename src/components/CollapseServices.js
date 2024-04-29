import React from "react";
import Collapse from "./Collapse";
import "../styles/CollapseServices.css";
import Referencement from "./Referencement";
import CreationSiteWeb from "./CreationSiteWeb";

function CollapseServices() {
    return(
        <div className="elementCollapseServices">
            <Collapse 
                titre={"Création de site web"}
                contenu={<CreationSiteWeb />}/>           
            <Collapse 
                titre={"Référencement"}
                contenu={<Referencement />}/>
        </div>
    );
}

export default CollapseServices;