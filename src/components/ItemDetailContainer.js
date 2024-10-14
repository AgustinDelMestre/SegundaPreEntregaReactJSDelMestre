import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../async-mocks'; // Asegúrate de importar correctamente el mock

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Extrae el categoryId de la URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de obtener los productos basados en la categoría
    getItems(categoryId).then((data) => {
      setItems(data);
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
