// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importa el CartProvider
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider> {/* Envuelve la aplicación con CartProvider */}
      <App />
    </CartProvider>
  </BrowserRouter>
);