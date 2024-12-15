import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Routes

import Header from './components/Header';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        {' '}
        {/* Usamos BrowserRouter para gestionar las rutas */}
        <Routes>
          {/* Ruta para la página principal */}
          <Route path='/MiasFlorist' element={<Home />} />

          {/* Ruta para la página de contacto */}
          <Route path='/MiasFlorist/Contact' element={<Contact />} />

          {/* Ruta para cuando no se encuentre la página */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
