import React from "react";
import "../styles/Banner.css";

function Banner(props) {
    const backgroundImage = {
        backgroundImage: `url('${props.imageUrl}')`,
        loading: "lazy"
    }

    return (
        <div className="parallax" style={backgroundImage}>
                <div className="banner-text">{props.accroche}</div>
        </div>
    );
}

export default Banner;