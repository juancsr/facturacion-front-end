import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DescargarReporteProductos } from '../../../../redux/actions/reportesActions';

const ReporteProductos = ({ DescargarReporteProductos }) => {
  const handleClick = () => DescargarReporteProductos();

  return (
    <Paper elevation={3}>
      <Button variant="outlined" color="primary" onClick={handleClick} fullWidth className="ReportButton">
        <ShoppingCartIcon />
        Descargar de Reporte de Productos
      </Button>
    </Paper>
  );
};

ReporteProductos.propTypes = {
  DescargarReporteProductos: PropTypes.func.isRequired,
};

const mapDispatchToProps = { DescargarReporteProductos };

export default connect(null, mapDispatchToProps)(ReporteProductos);
