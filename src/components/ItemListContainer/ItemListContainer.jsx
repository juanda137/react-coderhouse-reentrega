import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    // Simulación de una API de tortas
    setTimeout(() => {
      setCakes([
        {
          id: 1,
          name: 'Torta de Chocolate',
          price: 2500,
          image: '/src/assets/images/chocolate-cake.jpg',
          description: 'Deliciosa torta de chocolate.',
        },
        {
          id: 2,
          name: 'Torta de Vainilla',
          price: 2200,
          image: "/src/assets/images/vainilla-cake.jpg",
          description: 'Torta de vainilla deliciosa.',
        },
        {
          id: 3,
          name: 'Torta de Tres Leches',
          price: 2800,
          image: '/src/assets/images/tres-leches-cake.jpg',
          description: 'Torta suave y esponjosa con un toque de vainilla y chocolate.',
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="item-list-container">
      <h1>Nuestras Tortas</h1>
      <ItemList cakes={cakes} />
    </div>
  );
};

export default ItemListContainer;