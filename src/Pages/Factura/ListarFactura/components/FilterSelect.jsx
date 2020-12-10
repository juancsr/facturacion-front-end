import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as facturasActions from '../../../../redux/actions/facturasAction';

const FilterSelect = ({
  GetAllFacturas, GetAllFacturasHabilitadas, GetAllFacturasDeshabilitadas,
}) => {
  const states = ['TODAS', 'HABILITADAS', 'ANULADAS'];

  const [stateFilter, setStateFilter] = useState(states[0]);

  const handlestateChange = (e) => {
    setStateFilter(e.target.value);
    const filter = e.target.value;
    if (filter === states[0]) {
      GetAllFacturas();
    } else if (filter === states[1]) {
      GetAllFacturasHabilitadas();
    } else {
      GetAllFacturasDeshabilitadas();
    }
  };

  return (
    <>
      <small style={{ color: 'gray' }}>Mostrar únicamente facturas: </small>
      <Select
        style={{ marginLeft: 10 }}
        value={stateFilter}
        onChange={handlestateChange}
      >
        {states.map((state) => <MenuItem key={state} value={state}>{state}</MenuItem>)}
      </Select>
    </>
  );
};

FilterSelect.propTypes = {
  // SetFacturasHabilitadas: PropTypes.func.isRequired,
  GetAllFacturas: PropTypes.func.isRequired,
  GetAllFacturasHabilitadas: PropTypes.func.isRequired,
  GetAllFacturasDeshabilitadas: PropTypes.func.isRequired,
};

const mapStateToProps = (facturasReducer) => facturasReducer;

export default connect(mapStateToProps, facturasActions)(FilterSelect);
