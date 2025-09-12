import React, {useState} from 'react';
import Header from './components/Header'; // Header
import Banner from './components/Banner'; // Banner
import ContactForm from './components/ContacForm'; // ContactForm

import Footer from './components/Footer'; // Footer

// Componentes de la tienda
import ProductList from './components/ProductList'; // ProductList
import Cart from './components/Cart'; // Cart 

// Componentes Nuevos
import Noticias from './components/Noticias'; // Noticias
import SobreNosotros from './components/SobreNosotros'; // SobreNosotros

const App = () => {

     // Validación de en que pagina nos encontramos: Tienda
    const [currentPage, setCurrentPage] = useState("home");

    // Estado para guardos los items en el carrito
    const [cartItems, setCartItems] = useState([]);

    // Funcion que añade elementos al carrito
    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    }

    // Funcion que añade elementos al carrito
    const handleRemoveToCart = (productId) => {
        setCartItems((prevItems) => 
        prevItems.filter((item) => item.id !== productId)
        );
    };

    // Validador para moverme de pagina en pagina
    const handleNavigateToStore = () => setCurrentPage("Store"); // Ir a tienda   
    const handleNavigateToHome = () =>  setCurrentPage("home"); // Ir a pagina principal
    const handleNavigateToNoticias = () => setCurrentPage("noticias");
    const handleNavigateToSobre = () => setCurrentPage("sobre");


    return (
        <>
            <Header 
            onNavigateToHome={handleNavigateToHome} 
            onNavigateToStore={handleNavigateToStore}
            onNavigateToNoticias={handleNavigateToNoticias}
            onNavigateToSobre={handleNavigateToSobre}
            cartCount={cartItems.length}
            /> 
            
            <main>
                {currentPage === "store" ? (
                    <>
                        <ProductList onAddToCart={handleAddToCart} />
                        <Cart 
                        cartItems={cartItems} 
                        onRemoveFromCart={handleRemoveToCart} 
                        />
                    </>
                ) : currentPage === "noticias" ? (
                    <Noticias />
                    ) : currentPage === "sobre" ? (
                    <SobreNosotros />
                ) : (
                    <>
                        <Banner/>
                        <ProductList/>
                        <ContactForm/>
                                              
                    </>
                )}
            </main>

            <Footer/>
        </>
    );
};

export default App;

