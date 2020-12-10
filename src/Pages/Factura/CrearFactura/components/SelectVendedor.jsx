import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { operadoresReducerPropTypes } from '../../../../propTypes/reducersPropTypes';
import { SelecionarVendedor } from '../../../../redux/actions/operadoresActions';

const fontSize = 14;

const customStyles = {
  control: (styles) => ({ ...styles, fontSize }),
  option: (styles) => ({
    ...styles,
    fontSize,
  }),
};

// eslint-disable-next-line no-shadow
const SelectVendedor = ({ operadoresReducer, SelecionarVendedor }) => {
  const [options, setOptions] = useState([{ value: {}, label: 'Vendedores' }]);
  useEffect(() => {
    SelecionarVendedor({});
    if (operadoresReducer.listaVendedores.length > 0) {
      setOptions(operadoresReducer.listaVendedores.map((vendedor) => ({
        value: vendedor, label: `${vendedor.nombres} ${vendedor.apellidos} (C.C. ${vendedor.numero_identificacion})`,
      })));
    }
  }, [operadoresReducer.listaVendedores]);

  const handleChange = (e) => {
    SelecionarVendedor(e.value);
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="subtitle1">Vendedor *</Typography>
        <Select styles={customStyles} options={options} label="Escriba la cédula del cliente" onChange={handleChange} />
        `
      </Grid>
      <Grid xs={6}>
        { operadoresReducer.vendedorSeleccionado === null
          || operadoresReducer.vendedorSeleccionado.nombres === undefined
          ? <></>
          : (
            <div style={{ fontSize: 14 }}>
              <p>
                {`${operadoresReducer.vendedorSeleccionado.nombres} ${operadoresReducer.vendedorSeleccionado.apellidos}`}
              </p>
            </div>
          )}
      </Grid>
    </Grid>
  );
};

SelectVendedor.propTypes = {
  operadoresReducer: operadoresReducerPropTypes.isRequired,
  SelecionarVendedor: PropTypes.func.isRequired,
};

const mapStateToProps = (operadoresReducer) => operadoresReducer;
const mapDispatchToProps = { SelecionarVendedor };

export default connect(mapStateToProps, mapDispatchToProps)(SelectVendedor);
