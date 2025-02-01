import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    clearCart(); // Reinicia el carrito
    alert('¡Gracias por su compra, vuelva pronto!'); // Muestra un mensaje
    setIsOpen(false); // Cierra el menú desplegable
  };

  return (
    <div className="cart-widget">
      <div className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
        <span>🛒</span>
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