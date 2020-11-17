import './App.css';
import Navbar from './components/Navbar/Navbar';

import {Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Route path="/facturas" component={ListaFacturas} />
            <Route path="/productos" component={ListaProductos} />
          </Paper>
        </Grid>
      </Grid>
      <Fragment>
        
      </Fragment>
    </>
  );
}

export default App;
