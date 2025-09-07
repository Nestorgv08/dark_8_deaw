import React, { useState } from 'react';
import libroRecl from '../img/reclamo.jpg';

const Footer = () => {
    return(
        <>
        <footer>
            <div className="footer-left">
                <p>&copy; 2025 8³ Steakhouse Dark Kitchen. Todos los derechos reservados.</p>
                <p><a href="#">Términos y Condiciones</a> | <a href="#">Avisos de Privacidad</a></p>
            </div>
            <div className="footer-right">
                <a href="#"><img src={libroRecl} alt="Libro de Reclamaciones"/></a>
            </div>
        </footer>
        </>
    );
};

export default Footer;
