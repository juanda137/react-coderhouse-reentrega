import React, { useState } from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../AddItemButton/AddItemButton';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} className="detail-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
      <AddItemButton product={product} quantity={quantity} />
    </div>
  );
};

export default ItemDetail;