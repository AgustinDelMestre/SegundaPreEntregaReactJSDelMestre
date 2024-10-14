import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">CamisetasRetro</Link>
      <div>
        <Link to="/category/retro">Retro</Link>
        <Link to="/category/current">Actuales</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;