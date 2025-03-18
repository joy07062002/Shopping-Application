import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItemProps {
  item: Product;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="border p-4 rounded shadow mb-2">
      <h4 className="font-bold">{item.title}</h4>
      <p>${item.price}</p>
      <button
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;