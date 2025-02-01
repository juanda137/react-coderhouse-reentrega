import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'; 
import './CartWidget.css';

const CartWidget = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    
    Swal.fire({
      title: 'Confirmar Compra',
      html: `Este es el total de su compra: <strong>$${total}</strong>`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Comprar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#9d1f62', 
      cancelButtonColor: '#01b8bc', 
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(); 
        Swal.fire({
          title: '¡Gracias por su compra!',
          text: 'Vuelva pronto.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#9d1f62', 
        });
        setIsOpen(false); 
      }
    });
  };

  return (
    <div className="cart-widget">
      <div className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
        <span role="img" aria-label="Carrito">🛒</span>
        <span>{cart.length}</span>
      </div>
      {isOpen && (
        <div className="cart-dropdown">
          <h3>Productos en el Carrito</h3>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button className="checkout-button" onClick={handleCheckout}>
              Comprar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;