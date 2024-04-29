import React from "react";

function ElementProjet(props){
    return (
        <div>
            <div>Ici sera placé le titre du projet et les objectifs fixés</div>
            <div>
                <div>
                    <img
                        className="imageProjet" 
                        src={props.imageUrl}
                        alt={props.imageDescription}
                    />
                </div>
                <div className="explicationProjet">
                    <p>Ici sera placé la description du projet</p>
                </div>
            </div>

        </div>
    );
}

export default ElementProjet;