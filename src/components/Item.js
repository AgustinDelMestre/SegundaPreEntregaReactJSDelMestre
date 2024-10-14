import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default Item;