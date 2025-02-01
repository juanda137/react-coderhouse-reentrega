import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Susi Fiallo &copy; 2023</p>
      <p>Contacto: info@susifiallo.com</p>
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;