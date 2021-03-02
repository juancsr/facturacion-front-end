import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReporteProductos from './components/ReporteProductosVendidos/ReporteProductosVendidos';
import ReporteVendedores from './components/ReporteVendedores/ReporteVendedores';

const Reportes = () => (
  <div className="Container">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ReporteProductos />
      </Grid>
      <Grid item xs={6}>
        <ReporteVendedores />
      </Grid>
    </Grid>
  </div>

);

export default Reportes;
