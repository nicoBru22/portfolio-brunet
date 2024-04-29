import React from "react";
import '../styles/BarreProgres.css'

function BarreProgres() {
    return(
        <div className="barreProgres">
            <div className="barreProgression">
                <div className="pourcentage1"></div>
            </div>
            <div className="barreProgression">
            <div className="pourcentage2"></div>
                </div>
            <div className="barreProgression">
                <div className="pourcentage3"></div>
            </div>
            <div className="barreProgression">
                <div className="pourcentage4"></div>
            </div>
        </div>
    );
}

export default BarreProgres;