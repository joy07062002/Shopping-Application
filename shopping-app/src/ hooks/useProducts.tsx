import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Replace this with your API call or data fetching logic
    const fetchedProducts = [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 150 },
    ];
    setProducts(fetchedProducts);
  }, []);

  return products;
};

export default useProducts;
