import React from 'react';
import { separadorDeMiles } from '../../utils/formatters';

function Cart({ cart, onRemove }) {
  return (
    <div className="mt-8">
      <h2 id="h2Carrito" className="text-center text-[#A62177] pt-5">Carrito de compras</h2>
      <table className="w-full border-collapse text-center">
        <thead className="bg-[#A62177] border-b-5 border-[#621346] text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Cantidad</th>
            <th className="p-2">Precio total</th>
            <th className="p-2">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.nombre} className="hover:bg-[#db2d9e] even:bg-gray-200">
              <td className="p-2">{item.nombre}</td>
              <td className="p-2">${separadorDeMiles(item.precio)}</td>
              <td className="p-2">{item.cantidad}</td>
              <td className="p-2">${separadorDeMiles(item.precio * item.cantidad)}</td>
              <td className="p-2">
                <button
                  onClick={() => onRemove(item)}
                  className="rounded border border-[#621346] bg-transparent text-[#A62177] p-1 hover:bg-[#A62177] hover:text-white"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;