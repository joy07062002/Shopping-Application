import React from 'react';

interface ProductCardProps {
  product: any; // Replace 'any' with a proper product type as needed
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
