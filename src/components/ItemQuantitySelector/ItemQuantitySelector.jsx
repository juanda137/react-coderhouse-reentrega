import React, { useState } from 'react';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="item-quantity-selector">
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;