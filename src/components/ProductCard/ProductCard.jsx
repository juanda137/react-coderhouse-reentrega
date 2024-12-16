import React, { useState } from 'react';
import { separadorDeMiles } from '../../utils/formatters';

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="producto border border-[#A62177] rounded-lg p-4 transition duration-1000 hover:scale-110">
      <h3 className="text-[#A62177]">{product.nombre}</h3>
      <img className="w-full h-auto" src={product.imagen} alt={product.nombre} />
      <h3 className="text-[#A62177]">${separadorDeMiles(product.precio)}</h3>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        placeholder="cantidad"
        className="rounded border border-[#621346] bg-transparent text-[#A62177] p-1"
      />
      <button
        onClick={() => onAddToCart(product, quantity)}
        className="rounded border border-[#621346] bg-transparent text-[#A62177] p-1 hover:bg-[#A62177] hover:text-white"
      >
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;