import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { GetAllCategorias, SeleccionarCategoria } from '../../../../redux/actions/categoriasActions';
import { categoriaReducerPropTypes } from '../../../../propTypes/reducersPropTypes';

const SelectCategorias = ({
  disabled, categoriaReducer, GetAllCategorias, SeleccionarCategoria,
}) => {
  const [categorias, setCategorias] = useState(categoriaReducer.listaCategorias);

  useEffect(() => {
    GetAllCategorias();
    setCategorias(categoriaReducer.listaCategorias);
  }, [disabled]);

  return (
    <FormControl>
      <InputLabel>Categoría</InputLabel>
      <Select
        disabled={disabled}
        defaultValue="Selecciona una "
        onChange={(e) => SeleccionarCategoria(e.target.value)}
        required
      >
        <MenuItem disabled>
          <em>Selecciona una categoría</em>
        </MenuItem>
        {categorias && categorias.length > 0
          ? categorias.map((c) => <MenuItem key={c.id} value={c}>{c.nombre}</MenuItem>)
          : <></>}
      </Select>
      <FormHelperText>La categoría determina el IVA del producto</FormHelperText>
    </FormControl>
  );
};

SelectCategorias.defaultProps = {
  disabled: false,
};

SelectCategorias.propTypes = {
  disabled: PropTypes.bool,
  categoriaReducer: categoriaReducerPropTypes.isRequired,
  GetAllCategorias: PropTypes.func.isRequired,
  SeleccionarCategoria: PropTypes.func.isRequired,
};

const mapStateToProps = (categoriaReducer) => categoriaReducer;
const mapDispatchToProps = { GetAllCategorias, SeleccionarCategoria };

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategorias);
