import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart }) {
  return (
    <section className="container" id="product-list-section">
      <h2>Product Listing</h2>
      <div id="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
