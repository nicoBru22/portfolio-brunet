import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoHtml from '../images/logo-html5.png';
import logoCss from '../images/logo-css3.png';
import logoJavascript from '../images/logo-javascript.png';
import logoNodeJS from '../images/logo-nodejs.png';
import logoReact from '../images/logo-react.png';
import logoMongoDB from '../images/logo-mongodb.png';
import logoExpressJS from '../images/logo-expressjs.png';
import logoAgile from '../images/logo-agile.png';
import logoPageSpeedInsights from '../images/logo-pageSpeedInsights.png';
import logoGTmetrix from '../images/logo-gtmetrix.webp';
import logoLighthouse from '../images/logo-lighthouse.jpg';
import logoWave from '../images/logo-wave.jpeg';
import '../styles/Carousel.css';


function Carousel() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true 
    }
    return (
        <div className='slider'>
            <Slider {...settings} >
                <div className='divTechno'>
                    <img className="imgTechno" src={logoHtml} alt="logo Html" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoCss} alt="logo Css" />
                </div>
                <div  className='divTechno'>
                    <img className="imgTechno" src={logoJavascript} alt="logo Javascript" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoReact} alt="logo React" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoNodeJS} alt="logo Node.js" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoExpressJS} alt="logo ExpressJS" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoMongoDB} alt="logo MongoDB" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoWave} alt="logo Wave" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoLighthouse} alt="logo Google Lighthouse" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoGTmetrix} alt="logo GT Metrix" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoPageSpeedInsights} alt="logo PageSpeed Insights" />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoAgile} alt="logo Méthode Agile" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;