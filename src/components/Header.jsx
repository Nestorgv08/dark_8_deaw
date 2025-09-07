import React, { useState } from 'react';
import logo from '../img/LOGOEMPRESA.jpg';

const Header = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    
    const handleToggleMenu = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    return(
        <>
        <header>
            <div className="logo">
                <img src={logo} alt="8 AL CUBO LOGO"/>
                <h1>8³ STEAKHOUSE DARK KITCHEN</h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="catalogo.html">Catálogo</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#nosotros">Sobre Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            <button className="menu-toggle" aria-label="Abrir menú" onClick={handleToggleMenu}>☰</button>
        </header>

        <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
            <nav onClick={handleToggleMenu}>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#catalogo">Catálogo</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#nosotros">Sobre Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </aside>
        </>
    );
};

export default Header;
