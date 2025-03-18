import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div>
        <h1 className="text-3xl font-bold text-center my-4">Shopping App</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;