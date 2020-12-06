import PropTypes from 'prop-types';

export const productoPropType = PropTypes.shape({
  id_producto: PropTypes.number,
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  precio_unidad: PropTypes.number,
  id_categoria: PropTypes.number,
  codigo: PropTypes.string,
  existencias: PropTypes.number,
});

export const productoFacturaPropType = PropTypes.shape({
  codigo: PropTypes.string,
  cantidad: PropTypes.number,
  nombre: PropTypes.string,
  precio: PropTypes.number,
  iva: PropTypes.number,
  valorIVA: PropTypes.number,
});

export const productosPropType = PropTypes.arrayOf(productoFacturaPropType);
