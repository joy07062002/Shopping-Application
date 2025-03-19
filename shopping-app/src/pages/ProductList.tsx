import React from 'react';
import useProducts from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = useProducts();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Highlighted "Product List" Heading */}
      <h2 className="text-5xl font-bold text-center mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Product List
      </h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;