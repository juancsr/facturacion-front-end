import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridProductos from './components/GridProductos';
import CrearProducto from './components/CrearProducto';
import { productosReducerPropTypes } from '../../../propTypes/reducersPropTypes';
import * as productosActions from '../../../redux/actions/productosAction';

// eslint-disable-next-line react/prop-types
const ListaProductos = ({ productosReducer, GetAllProductos }) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => GetAllProductos(), []);

  useEffect(() => {
    setData(productosReducer.listaProductos);
  }, [productosReducer.listaProductos]);

  return (
    <>
      <div style={{ background: '#f6f6f6', margin: 5 }}>
        <Typography variant="h4">Lista de Productos</Typography>
      </div>
      <div className="Container">
        <CrearProducto />
        {data.length > 0
          ? <GridProductos searchValue={searchValue} setSearchValue={setSearchValue} data={data} />
          : <CircularProgress />}
      </div>
    </>
  );
};

ListaProductos.propTypes = {
  productosReducer: productosReducerPropTypes.isRequired,
  GetAllProductos: PropTypes.func.isRequired,
};

// eslint-disable-next-line max-len
const mapStateToProps = ({ productosReducer, notificationReducer }) => ({ productosReducer, notificationReducer });

export default connect(mapStateToProps, productosActions)(ListaProductos);
