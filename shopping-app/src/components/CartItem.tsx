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
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button
        className="text-red-500 hover:text-red-700 transition-colors duration-300"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;