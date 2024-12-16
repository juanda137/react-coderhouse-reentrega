import React from 'react';
import { Product } from './models/Product';
import { useCart } from './hooks/useCart';
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';
import CartActions from './components/CartActions/CartActions';

const productos = [
  new Product("Torta de vainilla", 50000, "./imagenes/torta de vainilla.jpg"),
  new Product("Torta de chocolate", 40000, "./imagenes/torta de chocolate.jpg"),
  new Product("Torta de las tres leches", 70000, "./imagenes/torta tres leches.jpg")
];

function App() {
  const { cart, addToCart, removeFromCart, clearCart, checkout } = useCart();

  return (
    <div className="container p-4">
      <h1 className="title text-3xl">Susi Fiallo postres</h1>
      <h2 className="subtitle text-xl mt-4">
        Bienvenidos a nuestra pasteleria aqui puedes ver algunos de nuestros productos, esperamos que lo disfrutes
      </h2>
      
      <div id="contenedor" className="products-grid p-5">
        {productos.map(producto => (
          <ProductCard
            key={producto.nombre}
            product={producto}
            onAddToCart={addToCart}
          />
        ))}
      </div>
  
      <Cart cart={cart} onRemove={removeFromCart} />
      <CartActions onCheckout={checkout} onClear={clearCart} />
    </div>
  );
}

export default App;