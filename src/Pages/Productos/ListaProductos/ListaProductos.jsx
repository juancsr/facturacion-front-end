import React, { Fragment, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import GridProductos from './components/GridProductos';
import CrearProducto from './components/CrearProducto';
import * as productosActions from '../../../redux/actions/productosAction';

// eslint-disable-next-line react/prop-types
const ListaProductos = ({ productosReducer, GetAllProductos }) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAllProductos();
    // eslint-disable-next-line react/prop-types
    setData(productosReducer.listaProductos);
  }, [productosReducer, GetAllProductos]);

  return (
    <>
      <div style={{ background: '#f6f6f6', margin: 5 }}>
        <Typography variant="h4">Lista de Productos</Typography>
      </div>
      <div className="Container">
        <CrearProducto />
        <GridProductos searchValue={searchValue} setSearchValue={setSearchValue} data={data} />
      </div>
    </>
  );
};

// eslint-disable-next-line max-len
const mapStateToProps = ({ productosReducer, notificationReducer }) => ({ productosReducer, notificationReducer });

export default connect(mapStateToProps, productosActions)(ListaProductos);
