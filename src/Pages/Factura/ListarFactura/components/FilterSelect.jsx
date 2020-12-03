import React, { useState, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const FilterSelect = () => {
  const states = ['TODAS', 'HABILITADA', 'ANULADA'];

  const [stateFilter, setStateFilter] = useState(states[0]);

  const handlestateChange = (e) => {
    setStateFilter(e.target.value);
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

export default FilterSelect;
