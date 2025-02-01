import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ cakes }) => {
  return (
    <div className="item-list">
      {cakes.map((cake) => (
        <div key={cake.id} className="item-card">
          <img src={cake.image} alt={cake.name} className="item-image" />
          <h3>{cake.name}</h3>
          <p>{cake.description}</p>
          <p>${cake.price}</p>
          <Link to={`/item/${cake.id}`} className="item-detail-link">
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;