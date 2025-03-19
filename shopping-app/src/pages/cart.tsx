import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const totalPriceInr = (totalPrice * 83).toFixed(2);

  const handleBuyNow = () => {
    setIsCheckoutOpen(true);
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setIsCheckoutOpen(false);
  };

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
            Total Price: <span className="text-blue-400">₹{totalPriceInr}</span>
          </p>
          <button
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-600 transition-colors duration-300"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      )}
      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Delivery Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              {location && (
                <p className="mt-2 text-gray-700">
                  <strong>Location:</strong> {location}
                </p>
              )}
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
            <button
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-gray-600 transition-colors duration-300"
              onClick={() => setIsCheckoutOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* Order Confirmation */}
      {isOrderPlaced && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
            <p className="text-gray-700 mb-4">
              Your order will be delivered to: <strong>{location}</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Total Price: <strong>₹{totalPriceInr}</strong>
            </p>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsOrderPlaced(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
