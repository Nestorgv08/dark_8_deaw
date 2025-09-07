import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Tu Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-xl">Tu carrito está vacío.</p>
          <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <div>
          <ul className="bg-white rounded-xl shadow-md p-6 space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg mr-6 object-cover" />
                  <div>
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <span className="text-gray-500">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 transition-colors duration-300"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-end items-center bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-gray-800">
              Total: <span className="text-indigo-600">${calculateTotal()}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
