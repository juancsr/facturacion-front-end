import PropTypes from 'prop-types';

export const facturaPropType = PropTypes.shape({
  codigo: PropTypes.string,
  vendedor: PropTypes.string,
  estado: PropTypes.string,
  cliente: PropTypes.string,
  fechaCompra: PropTypes.string,
  fechaRegistro: PropTypes.string,
  valorTotal: PropTypes.number,
});

export const facturasPropType = PropTypes.arrayOf(facturaPropType);
