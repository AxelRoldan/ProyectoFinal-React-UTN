import './App.css';
import react from 'react';
import Index from '../src/componentes/index'
import Categoria from '../src/componentes/Categoria/Categoria'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Categoria/:id' element={<Categoria />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
