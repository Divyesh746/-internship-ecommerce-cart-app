import React, { useState } from 'react';
import './App.css'; // Or import component-specific CSS
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const initialProducts = [
    {
      id: 1,
      name: "Apple Juice",
      price: 2.99,
      brand: "Fresh Farms",
      category: "Juice",
      image: "https://storage.googleapis.com/a1aa/image/3cbfdd96-d5b1-4070-104a-dc132f637753.jpg",
      alt: "Bottle of apple juice with orange color and label showing apple",
    },
    {
      id: 2,
      name: "Grapes Juice",
      price: 3.19,
      brand: "Vineyard Select",
      category: "Juice",
      image: "https://storage.googleapis.com/a1aa/image/902b6c53-4e98-418b-9530-589c85c8df48.jpg",
      alt: "Bottle of grapes juice with purple color and label showing grapes",
    },
    {
      id: 3,
      name: "Orange Juice",
      price: 3.49,
      brand: "Citrus Valley",
      category: "Juice",
      image: "https://placehold.co/48x96/png?text=Orange+Juice",
      alt: "Bottle of orange juice with orange color and label showing orange",
    },
    {
      id: 4,
      name: "Mango Juice",
      price: 3.79,
      brand: "Tropical Treats",
      category: "Juice",
      image: "https://placehold.co/48x96/png?text=Mango+Juice",
      alt: "Bottle of mango juice with yellow color and label showing mango",
    },
  ];

  const [products] = useState(initialProducts);
  const [cart, setCart] = useState({});

  const addToCart = (productId) => {
    const productToAdd = products.find((p) => p.id === productId);
    if (!productToAdd) return;

    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId]) {
        newCart[productId].quantity++;
      } else {
        newCart[productId] = { ...productToAdd, quantity: 1 };
      }
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  const changeQuantity = (productId, delta) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[productId]) return newCart;

      newCart[productId].quantity += delta;
      if (newCart[productId].quantity <= 0) {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const removeAll = () => {
    setCart({});
  };

  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart
        cart={cart}
        removeFromCart={removeFromCart}
        changeQuantity={changeQuantity}
        removeAll={removeAll}
      />
    </div>
  );
}

export default App;
