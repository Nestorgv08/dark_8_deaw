import React, { useState } from 'react';
import LibroReclamaciones from "./LibroReclamaciones"; // importar el componente
import libroRecl from '../img/reclamo.jpg';

const Footer = () => {
    return(
        
        <footer>
            <div className="footer-left">
                <p>&copy; 2025 8³ Steakhouse Dark Kitchen. Todos los derechos reservados.</p>
                <p><a href="#">Términos y Condiciones</a> | <a href="#">Avisos de Privacidad</a></p>
            </div>
            <div className="footer-right">
                <a href="#">Terminos y Condiciones</a> |{" "}
                <a href="#">Politica de Privacidad</a>
            </div>

            {/* 👇 Aquí está el Libro de Reclamaciones */}
             <LibroReclamaciones />
        </footer>
    
    );
};

export default Footer;
