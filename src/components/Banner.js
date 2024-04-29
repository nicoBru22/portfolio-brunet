import React from "react";
import "../styles/Banner.css";

function Banner(props) {
    return (
        <div className="parallax">
                <div className="banner-text">{props.accroche}</div>
        </div>
    );
}

export default Banner;