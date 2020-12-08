import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridFactura from './components/GridFacturas';
import FilterSelect from './components/FilterSelect';
import * as facturasActions from '../../../redux/actions/facturasAction';
import { facturacionReducerPropTypes } from '../../../propTypes/reducersPropTypes';

const ListaFactura = ({ facturasReducer, GetAllFacturas }) => {
  const [searchValue, setSearchValue] = useState('');

  // TODO: Use setData
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  useEffect(() => GetAllFacturas(), []);

  useEffect(() => {
    setData(facturasReducer.listaFacturas);
  }, [facturasReducer.listaFacturas]);

  return (
    <>
      <h3>Lista de facturas</h3>
      <div style={{ textAlign: 'left', marginLeft: 10 }}>
        <FilterSelect />
      </div>
      {data !== null
        ? <GridFactura data={data} searchValue={searchValue} setSearchValue={setSearchValue} />
        : <CircularProgress />}
    </>
  );
};

ListaFactura.propTypes = {
  facturasReducer: facturacionReducerPropTypes.isRequired,
  GetAllFacturas: PropTypes.func.isRequired,
};

const mapStateToProps = (facturasReducer) => facturasReducer;

export default connect(mapStateToProps, facturasActions)(ListaFactura);
