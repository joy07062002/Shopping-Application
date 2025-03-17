import React from 'react';
import useProducts from "../hooks/useProducts";
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const products: Product[] = useProducts();
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;

