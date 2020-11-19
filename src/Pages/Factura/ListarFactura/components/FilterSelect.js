import React, { useState, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const FilterSelect = () => {

    
    const states = ['TODAS', 'HABILITADA', 'ANULADA'];

    const [stateFilter, setStateFilter] = useState(states[0]);

    const handlestateChange = e => {
        setStateFilter(e.target.value)
    }

    return (
        <Fragment>
            <small style={{color: 'gray'}}>Mostrar únicamente facturas: </small>
            <Select
                style={{marginLeft: 10}}
                value={stateFilter}
                onChange={handlestateChange}
            >
                {states.map((state, index) => <MenuItem key={index} value={state}>{state}</MenuItem>)}
            </Select>
        </Fragment>
    );
}

export default FilterSelect;
