import React from 'react';

function CartItem({ item, removeFromCart, changeQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.alt} />
      <div className="cart-info">
        <h3 className="cart-name">{item.name}</h3>
        <p className="cart-price-amount">${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button
          className="qty-btn"
          type="button"
          aria-label={`Increase quantity of ${item.name}`}
          onClick={() => changeQuantity(item.id, 1)}
        >
          +
        </button>
        <span className="quantity-number">{item.quantity}</span>
        <button
          className="qty-btn"
          type="button"
          aria-label={`Decrease quantity of ${item.name}`}
          onClick={() => changeQuantity(item.id, -1)}
        >
          -
        </button>
      </div>
      <button
        className="remove-item"
        type="button"
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
