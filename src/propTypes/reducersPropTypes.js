import PropTypes from 'prop-types';
import { productoPropType } from './productosPropTypes';

export const loginReducerPropTypes = {
  username: PropTypes.string,
};

export const clientesReducerPropTypes = {
  listaClientes: PropTypes.array.isRequired,
};

export const notificationReducerPropTypes = {
  productosNotf: PropTypes.number,
  facturasNotf: PropTypes.number,
  userNotf: PropTypes.number,
};

export const productosReducerPropTypes = {
  listaProductos: PropTypes.array.isRequired,
  productoSeleccionado: productoPropType,
  registrado: PropTypes.bool.isRequired,
};

export const facturacionReducerPropTypes = {
  listaFacturas: PropTypes.array.isRequired,
  facturasHabilitadas: PropTypes.bool.isRequired,
  cargando: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  productos_factura: PropTypes.array.isRequired,
};
