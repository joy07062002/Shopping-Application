import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';
import Cart from './pages/cart';  // Fixed import (lowercase 'c')

const App: React.FC = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping App</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
