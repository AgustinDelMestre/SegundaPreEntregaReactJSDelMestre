import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <div>
        {/* Barra de navegación que estará visible en todas las páginas */}
        <NavBar />
        
        {/* Definimos las rutas de la aplicación */}
        <Routes>
          {/* Ruta para el catálogo de productos */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a CamisetasRetro" />} />
          
          {/* Ruta para ver productos filtrados por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por Categoría" />} />
          
          {/* Ruta para ver el detalle de un producto específico */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;