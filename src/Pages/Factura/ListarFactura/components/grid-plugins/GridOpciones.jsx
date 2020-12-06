import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const Opciones = () => [
  <Tooltip title="Actualizar información">
    <Button className="GridButton" variant="contained" size="small" color="primary" style={{ background: '#12A6E0' }}>
      <EditIcon style={{ color: '#FFF' }} />
    </Button>
  </Tooltip>,
  <Tooltip title="Agregar existencias">
    <Button
      className="GridButton"
      variant="contained"
      size="small"
                // onClick={handleExistanciasClick}
      style={{ background: '#07EDB1' }}
    >
      <AddShoppingCartIcon style={{ color: '#000' }} />
    </Button>
  </Tooltip>,
  <Tooltip title="Deshabilitar producto">
    <Button className="GridButton" variant="contained" size="small" style={{ background: '#E0284C' }}>
      <ClearIcon style={{ color: '#FFF' }} />
    </Button>
  </Tooltip>,
];

export default Opciones;
