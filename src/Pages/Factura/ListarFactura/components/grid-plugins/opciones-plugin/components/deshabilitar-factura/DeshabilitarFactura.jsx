import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';

const DeshabilitarFactura = ({ idFactura }) => {
  const handleClick = () => {
    console.log(idFactura);
  };

  return (
    <Tooltip title="Anular factura">
      <IconButton className="GridButton" variant="contained" size="small" onClick={handleClick}>
        <ClearIcon style={{ color: '#E0284C' }} />
      </IconButton>
    </Tooltip>
  );
};

DeshabilitarFactura.defaultProps = {
  idFactura: null,
};

DeshabilitarFactura.propTypes = {
  idFactura: PropTypes.number,
};

export default DeshabilitarFactura;
