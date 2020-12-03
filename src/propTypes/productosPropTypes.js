import PropTypes from 'prop-types';

export const productoPropType = PropTypes.shape({
  codigo: PropTypes.string,
  cantidad: PropTypes.number,
  nombre: PropTypes.string,
  precio: PropTypes.number,
  iva: PropTypes.number,
  valorIVA: PropTypes.number,
});

export const productosPropType = PropTypes.arrayOf(productoPropType);
