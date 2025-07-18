import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

function ShoppingCart({ cart, removeFromCart, changeQuantity, removeAll }) {
  const cartEntries = Object.values(cart);
  const isCartEmpty = cartEntries.length === 0;

  return (
    <section className="container" id="cart-section">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button
          id="remove-all-btn"
          className="remove-all"
          disabled={isCartEmpty}
          onClick={removeAll}
        >
          Remove all
        </button>
      </div>
      <div id="cart-items">
        {isCartEmpty ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          cartEntries.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          ))
        )}
      </div>
      <hr />
      <CartSummary cart={cart} />
    </section>
  );
}

export default ShoppingCart;
