import React from 'react';
import Button from '@material-ui/core/Button';
import ConfirmMessage from '../../Productos/ListaProductos/components/ConfirmMessage';

const BtnEnviarPromocion = () => {
  console.log('render');

  const handleClick = () => {
    console.log('click');
  };

  return (
    <div style={{ textAlign: 'left', marginLeft: 10, margin: 10 }}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Enviar de forma masiva
      </Button>
      <ConfirmMessage visible={false} message="Mensaje enviado" closeMessage="" />
    </div>
  );
};

export default BtnEnviarPromocion;
