import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoHtml from '../images/logo-html5.webp';
import logoCss from '../images/logo-css3.webp';
import logoJavascript from '../images/logo-javascript.webp';
import logoNodeJS from '../images/logo-nodejs.webp';
import logoReact from '../images/logo-react.webp';
import logoMongoDB from '../images/logo-mongodb.webp';
import logoExpressJS from '../images/logo-expressjs.webp';
import logoAgile from '../images/logo-agile.webp';
import logoPageSpeedInsights from '../images/logo-pageSpeedInsights.webp';
import logoGTmetrix from '../images/logo-gtmetrix.webp';
import logoLighthouse from '../images/logo-lighthouse.webp';
import logoWave from '../images/logo-wave.webp';
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
                    <img className="imgTechno" src={logoHtml} alt="logo Html" loading='lazy' />
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoCss} alt="logo Css" loading='lazy'/>
                </div>
                <div  className='divTechno'>
                    <img className="imgTechno" src={logoJavascript} alt="logo Javascript" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoReact} alt="logo React" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoNodeJS} alt="logo Node.js" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoExpressJS} alt="logo ExpressJS" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoMongoDB} alt="logo MongoDB" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoWave} alt="logo Wave" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoLighthouse} alt="logo Google Lighthouse" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoGTmetrix} alt="logo GT Metrix" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoPageSpeedInsights} alt="logo PageSpeed Insights" loading='lazy'/>
                </div>
                <div className='divTechno'>
                    <img className="imgTechno" src={logoAgile} alt="logo Méthode Agile" loading='lazy'/>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;