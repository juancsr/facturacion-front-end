import React, { Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from './components/Navbar/Navbar';
import ListaFacturas from './Pages/Factura/ListarFactura/ListaFacturas';
import ListaProductos from './Pages/Productos/ListaProductos/ListaProductos';

function App() {
  return (
    <>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Route path="/facturas" component={ListaFacturas} />
            <Route path="/productos" component={ListaProductos} />
          </Paper>
        </Grid>
      </Grid>
      {/* <Fragment>

      </Fragment> */}
    </>
  );
}

export default App;
