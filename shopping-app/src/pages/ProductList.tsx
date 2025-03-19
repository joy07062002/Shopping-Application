import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import CheckoutModal from '../components/CheckoutModal'; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = useProducts();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // State for selected product

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product); // Set the selected product for checkout
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
            onBuyNow={handleBuyNow} // Pass the Buy Now handler
          />
        ))}
      </div>
      {/* Checkout Modal */}
      {selectedProduct && (
        <CheckoutModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;