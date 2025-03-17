import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-2">Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))
      )}
      <p className="mt-4 font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
