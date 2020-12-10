import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { clientesReducerPropTypes } from '../../../../propTypes/reducersPropTypes';
import { SelecionarCliente } from '../../../../redux/actions/clientesActions';

const fontSize = 14;

const customStyles = {
  control: (styles) => ({ ...styles, fontSize }),
  option: (styles) => ({
    ...styles,
    fontSize,
  }),
};

// eslint-disable-next-line no-shadow
const SelectClientes = ({ clientesReducer, SelecionarCliente }) => {
  const [options, setOptions] = useState([{ value: {}, label: 'Clientes' }]);
  useEffect(() => {
    SelecionarCliente({});
    if (clientesReducer.listaClientes.length > 0) {
      setOptions(clientesReducer.listaClientes.map((cliente) => ({
        value: cliente, label: `${cliente.nombres} ${cliente.apellidos !== '-1' ? `${cliente.apellidos} (C.C. ${cliente.numero_identificacion})` : ''}`,
      })));
    }
  }, [clientesReducer.listaClientes]);

  const handleChange = (e) => {
    SelecionarCliente(e.value);
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="subtitle1">Cliente *</Typography>
        <Select styles={customStyles} options={options} label="Escriba la cédula del cliente" onChange={handleChange} />
        `
      </Grid>
      <Grid xs={6}>
        { clientesReducer.clienteSelecionado === null
          || clientesReducer.clienteSelecionado.nombres === undefined
          ? <></>
          : (
            <div style={{ fontSize: 14 }}>
              <p>
                <b>Nombre completo: </b>
                {`${clientesReducer.clienteSelecionado.nombres} ${clientesReducer.clienteSelecionado.apellidos}`}
              </p>
              <p>
                <b>Teléfono: </b>
                {`${clientesReducer.clienteSelecionado.telefono}`}
              </p>
              <p>
                <b>Número de identificación: </b>
                {' '}
                {`${clientesReducer.clienteSelecionado.numero_identificacion}`}
              </p>
            </div>
          )}
      </Grid>
    </Grid>
  );
};

SelectClientes.propTypes = {
  clientesReducer: clientesReducerPropTypes.isRequired,
  SelecionarCliente: PropTypes.func.isRequired,
};

const mapStateToProps = (clientesReducer) => clientesReducer;
const mapDispatchToProps = { SelecionarCliente };

export default connect(mapStateToProps, mapDispatchToProps)(SelectClientes);
