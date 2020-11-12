import './App.css';
import Navbar from './components/Navbar/Navbar';

import {Route} from 'react-router-dom';

import ListaFacturas from './Pages/Factura/ListarFactura/ListaFacturas';
import ListaProductos from './Pages/Productos/ListaProductos/ListaProductos';
import { Fragment } from 'react';

function App() {
  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    </style>
      <Navbar />
      <Fragment>
        <Route path="/facturas" component={ListaFacturas} />
        <Route path="/productos" component={ListaProductos} />
      </Fragment>
    </>
  );
}

export default App;
