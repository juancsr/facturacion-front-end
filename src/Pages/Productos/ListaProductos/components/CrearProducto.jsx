import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalFormulario from './FormularioProductos';

const CrearProducto = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <>
      <Tooltip title="Crear nuevo producto">
        <Button onClick={handleClick} variant="contained" size="small" color="primary" className="MainButton">
          <AddBoxIcon />
          Nuevo
        </Button>
      </Tooltip>
      <ModalFormulario openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default CrearProducto;
