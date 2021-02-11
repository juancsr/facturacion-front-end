import PropTypes from 'prop-types';

const categoriaPropTypes = PropTypes.shape({
  id_categoria: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  iva: PropTypes.number.isRequired,
});

export default categoriaPropTypes;
