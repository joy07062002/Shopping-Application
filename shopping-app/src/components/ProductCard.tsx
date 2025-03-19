import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
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
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-300 transform hover:scale-105 active:scale-95"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;