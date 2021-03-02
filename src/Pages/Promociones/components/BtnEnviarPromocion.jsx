import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ConfirmMessage from '../../Productos/ListaProductos/components/ConfirmMessage';
import { EnviarPromocionMasiva } from '../../../redux/actions/promocionesActions';

const BtnEnviarPromocion = ({ EnviarPromocionMasiva }) => {
  console.log('render');

  const handleClick = () => {
    console.log('click');
    EnviarPromocionMasiva();
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

BtnEnviarPromocion.propTypes = {
  EnviarPromocionMasiva: PropTypes.func.isRequired,
};

const mapDispatchToProps = { EnviarPromocionMasiva };

export default connect(null, mapDispatchToProps)(BtnEnviarPromocion);
