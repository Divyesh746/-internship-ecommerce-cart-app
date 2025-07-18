import React from 'react';

function CartSummary({ cart }) {
  const cartEntries = Object.values(cart);
  const totalAmount = cartEntries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartEntries.reduce((sum, item) => sum + item.quantity, 0);
  const isCartEmpty = cartEntries.length === 0;

  return (
    <div id="cart-summary" className="cart-summary" style={{ display: isCartEmpty ? 'none' : 'flex' }}>
      <div className="summary-text">
        <p>Sub-Total</p>
        <p id="total-items">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
      </div>
      <div id="total-amount" className="summary-amount">${totalAmount.toFixed(2)}</div>
      <button className="checkout-btn" type="button">Checkout</button>
    </div>
  );
}

export default CartSummary;
