import PropTypes from 'prop-types';

export const facturaPropType = PropTypes.shape({
  id_factura: PropTypes.nomber,
  codigo: PropTypes.string,
  vendedor: PropTypes.string,
  cliente: PropTypes.string,
  estado: PropTypes.string,
  fecha_compra: PropTypes.string,
  fecha_registro: PropTypes.string,
  valor_total: PropTypes.number,
});

export const facturasPropType = PropTypes.arrayOf(facturaPropType);
