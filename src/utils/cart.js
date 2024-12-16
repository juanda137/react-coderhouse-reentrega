export function simularCompra() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() < 0.8;
      if (exito) {
        resolve();
      } else {
        reject("Error al procesar la compra. Por favor, inténtelo de nuevo.");
      }
    }, 2000);
  });
}