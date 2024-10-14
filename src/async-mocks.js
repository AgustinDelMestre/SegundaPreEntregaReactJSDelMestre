const products = [
    { id: 1, name: 'Camiseta Retro Barcelona', category: 'retro', description: 'Camiseta de Barcelona temporada 1992.' },
    { id: 2, name: 'Camiseta Retro Argentina', category: 'retro', description: 'Camiseta de Argentina Mundial 1986.' },
    { id: 3, name: 'Camiseta Actual Real Madrid', category: 'actual', description: 'Camiseta del Real Madrid temporada 2024.' },
    { id: 4, name: 'Camiseta Actual PSG', category: 'actual', description: 'Camiseta del PSG temporada 2024.' },
  ];
  
  // Función para simular la obtención de productos, filtrando por categoría
  export const getItems = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((product) => product.category === categoryId));
        } else {
          resolve(products); // Si no hay categoría, devuelve todos los productos
        }
      }, 1000); // Simula un retraso de 1 segundo
    });
  };
  
  // Función para simular la obtención de un producto específico por su id
  export const getItemById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === parseInt(id)));
      }, 1000);
    });
  };