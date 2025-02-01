import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a una API
    const fetchProduct = async () => {
      const products = [
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
          image: '/src/assets/images/vainilla-cake.jpg',
          description: 'Torta de vainilla.',
        },
        {
          id: 3,
          name: 'Torta de Tres Leches',
          price: 2800,
          image: '/src/assets/images/tres-leches-cake.jpg',
          description: 'Torta suave y esponjosa con un toque de vainilla y chocolate.',
        },
      ];

      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;