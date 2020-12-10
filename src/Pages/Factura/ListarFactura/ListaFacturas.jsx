import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridFactura from './components/GridFacturas';
import FilterSelect from './components/FilterSelect';
import * as facturasActions from '../../../redux/actions/facturasAction';
import { facturacionReducerPropTypes } from '../../../propTypes/reducersPropTypes';
import FormularioFactura from '../CrearFactura/FormularioFactura';
// eslint-disable-next-line no-unused-vars
const ListaFactura = ({ facturasReducer, GetAllFacturas, SetAbrirFormularioRegistro }) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);

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
      <div>
        <FormularioFactura />
      </div>
      {facturasReducer.cargando
        ? <CircularProgress />
        : <GridFactura data={data} searchValue={searchValue} setSearchValue={setSearchValue} />}
    </>
  );
};

ListaFactura.propTypes = {
  facturasReducer: facturacionReducerPropTypes.isRequired,
  GetAllFacturas: PropTypes.func.isRequired,
  SetAbrirFormularioRegistro: PropTypes.func.isRequired,
};

const mapStateToProps = (facturasReducer) => facturasReducer;

export default connect(mapStateToProps, facturasActions)(ListaFactura);
