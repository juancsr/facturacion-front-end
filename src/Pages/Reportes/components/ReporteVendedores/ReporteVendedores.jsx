import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { DescargarReporteVendedores } from '../../../../redux/actions/reportesActions';

const ReporteVendedores = ({ DescargarReporteVendedores }) => {
  const handleClick = () => DescargarReporteVendedores();

  return (
    <Paper elevation={3}>
      <Button variant="outlined" color="primary" onClick={handleClick} fullWidth className="ReportButton">
        <SupervisedUserCircleIcon />
        Descargar de Reporte de Vendedores
      </Button>
    </Paper>
  );
};

ReporteVendedores.propTypes = {
  DescargarReporteVendedores: PropTypes.func.isRequired,
};

const mapDispatchToProps = { DescargarReporteVendedores };

export default connect(null, mapDispatchToProps)(ReporteVendedores);
