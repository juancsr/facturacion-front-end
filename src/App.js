import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Route, Switch } from 'react-router-dom';

import ListaFacturas from './Pages/Factura/ListarFactura/ListaFacturas';
import CrearFactura from './Pages/Factura/CrearFactura/CrearFactura';
import ListaProductos from './Pages/Productos/ListaProductos/ListaProductos';
import CrearProducto from './Pages/Productos/CrearProducto/CrearProducto';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Route path="/" component={this} />
        <Route path="/facturas" component={ListaFacturas} />
        <Route path="/productos" component={ListaProductos} />
        {/* <Route path="/producto/crear" component={CrearProducto} /> */}
      </div>
    </>
  );
}

export default App;
