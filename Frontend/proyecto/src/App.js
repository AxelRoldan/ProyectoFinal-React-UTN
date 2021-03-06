import './App.css';
import Index from '../src/componentes/index'
import Categoria from '../src/componentes/Categoria/Categoria'
import ConsultaProducto from './componentes/Producto/ConsultaProducto';
import SubCategoria from './componentes/Categoria/SubCategoria';
import MostrarProducto from './componentes/Producto/MostrarProducto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MiCarrito from './componentes/Carrito/MiCarrito';
import CompraExitosa from './componentes/Carrito/CompraExitosa';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Categoria/:id' element={<Categoria />} />
        <Route path='/SubCategoria/Productos/:id' element={<SubCategoria />} />
        <Route path='/BuscarProducto/:id' element={<ConsultaProducto />} />
        <Route path='/Producto/:id' element={<MostrarProducto />} />
        <Route path='/MiCarrito' element={<MiCarrito/>} />
        <Route path='/CompraExitosa' element={<CompraExitosa/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
