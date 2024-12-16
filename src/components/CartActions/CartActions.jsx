import React from 'react';

function CartActions({ onCheckout, onClear }) {
  return (
    <div className="comprarBorrar grid grid-cols-2 gap-[10%] px-[15%] py-5">
      <button
        onClick={onCheckout}
        className="rounded border border-[#621346] bg-transparent text-[#A62177] p-1 hover:bg-[#A62177] hover:text-white"
      >
        Comprar el carrito
      </button>
      <button
        onClick={onClear}
        className="rounded border border-[#621346] bg-transparent text-[#A62177] p-1 hover:bg-[#A62177] hover:text-white"
      >
        Borrar el carrito
      </button>
    </div>
  );
}

export default CartActions;