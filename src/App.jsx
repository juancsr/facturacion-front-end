/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import Reportes from './Pages/Reportes/Reportes';
import PagoElectronico from './Pages/PagoElectronico/PagoElectronico';
import { CheckActiveSession } from './redux/actions/loginActions';

function App({ loginReducer, CheckActiveSession }) {
  const [isSessionActive, setSessionActive] = useState(false);
  const [isPagoElectronico, setIsPagoElectronico] = useState(false);

  useEffect(() => {
    CheckActiveSession();
    const currentPath = window.location.href.split('/');
    if (currentPath.find((element) => element === 'pagar') !== undefined) {
      setIsPagoElectronico(true);
      console.log('es pago electronico');
    } else {
      setIsPagoElectronico(false);
    }
  }, []);

  useEffect(() => {
    setSessionActive(loginReducer.activeSession);
  }, [loginReducer.activeSession]);

  return (
    <>
      {isPagoElectronico
        ? (
          <Route path="/pagar/:facturaId" component={PagoElectronico} />
        ) : (
          <>
            {isSessionActive
              ? (
                <>
                  <Navbar />
                  <Grid container spacing={2} style={{ textAlign: 'center', margin: '0 auto' }}>
                    <Grid item xs={12}>
                      <Paper>
                        <Route path="/facturas" component={ListaFacturas} />
                        <Route path="/productos" component={ListaProductos} />
                        <Route path="/promociones" component={Promociones} />
                        <Route path="/reportes" component={Reportes} />
                      </Paper>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Login>
                    <Route path="/login" component={Login} />
                  </Login>
                </>
              )}
          </>
        )}
    </>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  loginReducer: PropTypes.object.isRequired,
  CheckActiveSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = { CheckActiveSession };

export default connect(mapStateToProps, mapDispatchToProps)(App);
