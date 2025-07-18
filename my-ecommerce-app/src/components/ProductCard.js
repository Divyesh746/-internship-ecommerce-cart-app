import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.alt} />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand} - {product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart" type="button" onClick={() => addToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
