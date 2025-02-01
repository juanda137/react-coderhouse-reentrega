import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './AddItemButton.css';

const AddItemButton = ({ product, quantity }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.name} agregado al carrito!`); // Muestra un mensaje
  };

  return (
    <button className="add-item-button" onClick={handleAddToCart}>
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;