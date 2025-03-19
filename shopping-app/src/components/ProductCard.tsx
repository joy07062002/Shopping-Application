import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onBuyNow: (product: Product) => void; // New prop for Buy Now
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onBuyNow }) => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const priceInr = (product.price * 83).toFixed(2); // Convert USD to INR

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white bg-opacity-10 backdrop-blur-md border-opacity-20 transform hover:-translate-y-2 transition-transform duration-300">
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{product.title}</h3>
        <p className="text-gray-200 mb-4">₹{priceInr}</p> {/* Display price in INR */}
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-300 transform hover:scale-105 active:scale-95 mb-2"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-teal-700 transition-colors duration-300 transform hover:scale-105 active:scale-95"
          onClick={() => onBuyNow(product)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Buy Now
        </button>
      </div>
      {/* Hover Effect */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-lg font-semibold">₹{priceInr}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;