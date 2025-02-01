import React from 'react';
import './Brief.css';

const Brief = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="brief">
      <h3>Resumen de la Compra</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Brief;