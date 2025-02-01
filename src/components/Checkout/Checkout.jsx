import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Brief from '../Brief/Brief';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <Brief cart={cart} />
    </div>
  );
};

export default Checkout;