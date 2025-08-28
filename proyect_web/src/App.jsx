import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Navegacion.jsx'
import Guia_trucos from './Guia_trucos.jsx'
import Inicio from './Inicio.jsx'
import Comunidad from './Comunidad.jsx'
import Noticia from './Noticia.jsx'
import Juegos from './Juegos.jsx';

function App() {

  return (
    <Router>
      <div className="App">
        <Navegacion />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/noticia" element={<Noticia />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/guia_trucos" element={<Guia_trucos />} />
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
