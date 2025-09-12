import React from 'react';
import './css/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {

    const priceDisplay = product.price ? `$${product.price.toFixed(2)}` : 'Precio no disponible';

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-actions">
          <span className="product-card-price">
            {priceDisplay}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="add-to-cart-button"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
