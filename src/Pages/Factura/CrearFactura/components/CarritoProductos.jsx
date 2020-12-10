import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GridCarritoProductos from './GridCarritoProductos';
import { AgregarProductoACarrito } from '../../../../redux/actions/facturasAction';
import { GetAllProductos } from '../../../../redux/actions/productosAction';
import { productosReducerPropTypes } from '../../../../propTypes/reducersPropTypes';

const fontSize = 14;

const customStyles = {
  control: (styles) => ({ ...styles, fontSize }),
  option: (styles) => ({
    ...styles,
    fontSize,
  }),
};

// eslint-disable-next-line no-shadow
const CarritoProductos = ({ productosReducer, AgregarProductoACarrito, GetAllProductos }) => {
  const [options, setOptions] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    GetAllProductos();
  }, []);

  useEffect(() => {
    setOptions(productosReducer.listaProductos.map((item) => ({
      value: item, label: `${item.codigo} - ${item.nombre}, Existencias: ${item.existencias}`,
    })));
  }, [productosReducer.listaProductos]);

  const handleClick = () => {
    AgregarProductoACarrito({ ...producto, cantidad });
    setCantidad(0);
  };

  const handleChange = (e) => {
    setProducto(e.value);
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Select styles={customStyles} options={options} label="Seleccione el producto" onChange={handleChange} />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            autoFocus
            placeholder="Cantidad"
            margin="none"
            id="code"
            label="Cantidad"
            type="0"
            fullWidth
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="primary" onClick={handleClick}>
            Agregar producto
          </Button>
        </Grid>
      </Grid>
      <GridCarritoProductos />
    </>
  );
};

CarritoProductos.propTypes = {
  productosReducer: productosReducerPropTypes.isRequired,
  AgregarProductoACarrito: PropTypes.func.isRequired,
  GetAllProductos: PropTypes.func.isRequired,
};

const mapStateToProps = ({ productosReducer }) => ({ productosReducer });
const mapDispatchToProps = { AgregarProductoACarrito, GetAllProductos };
export default connect(mapStateToProps, mapDispatchToProps)(CarritoProductos);
