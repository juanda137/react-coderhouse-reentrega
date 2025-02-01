import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span>Susi Fiallo</span>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalog">Catálogo</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;