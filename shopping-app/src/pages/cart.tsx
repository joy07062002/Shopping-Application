import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-8 p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg sticky bottom-0">
          <p className="text-xl font-bold text-white">
            Total Price: <span className="text-blue-400">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;