import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { DescargarFactura } from '../../../../../../../../redux/actions/facturasAction';

const BtnDescargarFactura = ({ idFactura, DescargarFactura }) => {
  const handleClick = () => {
    console.log(idFactura);
    DescargarFactura(idFactura);
  };

  return (
    <Tooltip title="Descargar factura">
      <IconButton className="GridButton" size="small" onClick={handleClick}>
        <SaveAltIcon style={{ color: '#12A6E0' }} />
      </IconButton>
    </Tooltip>
  );
};

BtnDescargarFactura.defaultProps = {
  idFactura: null,
};

BtnDescargarFactura.propTypes = {
  idFactura: PropTypes.number,
  DescargarFactura: PropTypes.func.isRequired,
};

const mapDispatchToProps = { DescargarFactura };

export default connect(null, mapDispatchToProps)(BtnDescargarFactura);
