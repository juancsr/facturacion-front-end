import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from './components/Navbar/Navbar';
import ListaFacturas from './Pages/Factura/ListarFactura/ListaFacturas';
import ListaProductos from './Pages/Productos/ListaProductos/ListaProductos';
import Promociones from './Pages/Promociones/index';
import Login from './Pages/Login/login';

function App(loginReducer) {
  console.log('reducer: ', loginReducer);
  return (
    <>
      {loginReducer.activeSession
        ? (
          <>
            <Navbar />
            <Grid container spacing={2} style={{ textAlign: 'center', margin: '0 auto' }}>
              <Grid item xs={12}>
                <Paper>
                  <Route path="/facturas" component={ListaFacturas} />
                  <Route path="/productos" component={ListaProductos} />
                  <Route path="/promociones" component={Promociones} />
                </Paper>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {loginReducer.activeSession === true ? 'sesión activa' : 'login'}
            <Login />
          </>
        )}
    </>
  );
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

export default connect(mapStateToProps, null)(App);
