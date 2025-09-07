import React from 'react';
import Header from './components/Header'; // Header
import Banner from './components/Banner'; // Banner
import ContactForm from './components/ContacForm'; // ContactForm
import ListaProductos from './components/ListaProductos'; // listaproductos

import Footer from './components/Footer'; // Footer

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Banner/>
                <ListaProductos/>
                <ContactForm/>
            </main>
            <Footer/>
        </>
    );
}

export default App;

