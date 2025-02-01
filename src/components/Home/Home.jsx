import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Bienvenidos a Susi Fiallo</h1>
        <p>Sabores como el amor de mamá</p>
        <Link to="/catalog" className="cta-button" style={{ textDecoration: 'none' }}> {}
          Explora Nuestras Tortas
        </Link>
      </div>
      <div className="intro-section">
        <h2>Nuestra Historia</h2>
        <p>
          En Susi Fiallo, nos dedicamos a crear tortas artesanales que te transportan a los sabores de la infancia.
          Cada bocado es una experiencia única, llena de amor y dedicación. ¡Ven y descubre por qué somos los favoritos
          de la ciudad!
        </p>
      </div>
    </div>
  );
};

export default Home;