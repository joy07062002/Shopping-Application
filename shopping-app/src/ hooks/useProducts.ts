import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const useProducts = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>(['products'], fetchProducts);
  return { products: data || [], isLoading, error };
};

export default useProducts;
