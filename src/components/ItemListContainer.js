import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../async-mocks';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemById(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
