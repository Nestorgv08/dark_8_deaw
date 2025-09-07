import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-3xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
