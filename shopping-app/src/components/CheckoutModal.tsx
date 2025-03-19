import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CheckoutModalProps {
  product: Product;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  const [location, setLocation] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const priceInr = (product.price * 83).toFixed(2); // Convert USD to INR

  const handlePayment = () => {
    setIsPaymentSuccessful(true); // Simulate successful payment
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-lg font-semibold mb-4">₹{priceInr}</p>
        {!isPaymentSuccessful ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Delivery Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-semibold mb-4">Payment Successful!</p>
            <p className="text-gray-700">Your product will be delivered to: <strong>{location}</strong></p>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;