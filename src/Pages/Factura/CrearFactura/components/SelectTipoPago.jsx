import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

const SelectTipoPago = ({ tipoPago, setTipoPago }) => {
  const options = ['EFECTIVO', 'TARJETA DÉBIDO', 'TARJETA CRÉDITO'];

  const handleChange = (e) => {
    setTipoPago(e.target.value);
  };
  return (
    <Grid container>
      <Grid xs={4}>
        <InputLabel id="demo-simple-select-label">Tipo de pago</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Tipo de pago"
          value={tipoPago}
          fullWidth
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>

  );
};

SelectTipoPago.propTypes = {
  tipoPago: PropTypes.string.isRequired,
  setTipoPago: PropTypes.func.isRequired,
};

export default SelectTipoPago;
