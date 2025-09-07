import React, { useState } from 'react';
import imgbanner from '../img/banner8alcubo.jpg';

const Banner = () => {  
    return(
        <>
        <section className="hero" id="inicio">
            <img src={imgbanner} alt="Portada banner 8 al cubo"/>
            <div className="hero-text">
                <h2>Sabor a la Parrilla</h2>
                <p>Las mejores Hamburguesas a la Parrilla, Alitas, Pollos a la Brasa y Carnes a la Parrilla de la ciudad</p>
            </div>
        </section>
        </>
    );
};

export default Banner;
