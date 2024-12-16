import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { simularCompra } from '../utils/cart';
import { separadorDeMiles } from '../utils/formatters';

export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("productos"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const saveCart = (newCart) => {
    localStorage.setItem("productos", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = (product, quantity) => {
    if (isNaN(quantity) || quantity <= 0) {
      Swal.fire({
        title: 'Cantidad inválida',
        text: 'Por favor ingrese un número válido y positivo.',
        icon: 'error',
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
      });
      return;
    }

    const existingProduct = cart.find(item => item.nombre === product.nombre);
    let newCart;

    if (existingProduct) {
      newCart = cart.map(item =>
        item.nombre === product.nombre
          ? { ...item, cantidad: item.cantidad + quantity }
          : item
      );
    } else {
      newCart = [...cart, { ...product, cantidad: quantity }];
    }

    saveCart(newCart);
    Swal.fire({
      title: "Se agregó al carrito correctamente",
      icon: "success",
      confirmButtonColor: "#A62177",
      iconColor: "#A62177",
      buttonsStyling: false
    });
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.nombre !== product.nombre);
    saveCart(newCart);
    Swal.fire({
      title: "Se eliminó correctamente del carrito",
      icon: "error",
      confirmButtonColor: "#A62177",
      iconColor: "#A62177",
      buttonsStyling: false
    });
  };

  const clearCart = () => {
    saveCart([]);
    Swal.fire({
      title: "Se ha vaciado el carrito",
      icon: "success",
      confirmButtonColor: "#A62177",
      iconColor: "#A62177",
      buttonsStyling: false
    });
  };

  const checkout = async () => {
    if (cart.length === 0) {
      Swal.fire({
        title: "El carrito está vacío",
        icon: "warning",
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
      });
      return;
    }

    const precioTotal = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    const interes = precioTotal * 0.10;
    const precioFinal = precioTotal + interes;

    const result = await Swal.fire({
      title: `
        <p>Total productos: <strong>$${separadorDeMiles(precioTotal)}</strong></p>
        <p>Impuestos (10%): <strong>$${separadorDeMiles(interes)}</strong></p>
        <p>Total: <strong>$${separadorDeMiles(precioFinal)}</strong></p>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: 'Comprar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: "#A62177",
      cancelButtonColor: "#d33",
      iconColor: "#A62177",
      buttonsStyling: false
    });

    if (result.isConfirmed) {
      try {
        await simularCompra();
        Swal.fire({
          title: '¡Compra realizada!',
          text: `El precio total de su compra es $${separadorDeMiles(precioFinal)}.`,
          icon: 'success',
          confirmButtonColor: "#A62177",
          iconColor: "#A62177",
          buttonsStyling: false
        });
        saveCart([]);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
          confirmButtonColor: "#A62177",
          iconColor: "#A62177",
          buttonsStyling: false
        });
      }
    } else {
      Swal.fire({
        title: 'No se compró nada',
        icon: 'info',
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
      });
    }
  };

  return { cart, addToCart, removeFromCart, clearCart, checkout };
}