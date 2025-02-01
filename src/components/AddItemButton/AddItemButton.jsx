import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import './AddItemButton.css';

const AddItemButton = ({ product, quantity }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    Swal.fire({
      title: '¡Producto agregado!',
      text: `${product.name} se ha añadido al carrito.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#9d1f62', // Color del botón
    });
  };

  return (
    <button className="add-item-button" onClick={handleAddToCart}>
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;