import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { productoPropType } from '../../../../propTypes/productosPropTypes';
import * as productosActions from '../../../../redux/actions/productosAction';

const useStyles = makeStyles(() => ({
  header: {
    background: '#f6f6f6',
    borderBottom: '1px solid #595959',
  },
  dialog: {
    fontSize: '6px !important',
  },
  codeBarLabel: {
    fontFamily: ['"Libre Barcode 39"', 'cursive'],
    fontSize: 24,
  },
  smallHelp: {
    fontSize: 10,
    color: 'gray',
  },
}));

const FormularioExistencias = ({ producto, AgregarExistencias }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [descripcion, setDescripcion] = useState('');
  const [submitDisabled, setsubmitDisabled] = useState(true);

  useEffect(() => {
    setsubmitDisabled(true);
    if (cantidad > 5 && descripcion !== '') {
      setsubmitDisabled(false);
    }
  }, [cantidad, descripcion]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const data = { codigo: producto.codigo, cantidad, descripcion };
    AgregarExistencias(data);
    setOpen(false);
    setsubmitDisabled(true);
  };

  return (
    <div>
      <Tooltip title="Agregar existencias">
        <Button
          className="GridButton"
          variant="contained"
          size="small"
          onClick={handleClickOpen}
          style={{ background: '#07EDB1' }}
        >
          <AddShoppingCartIcon style={{ color: '#000' }} />
        </Button>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title" className={classes.header}>{`Registrar existencias: ${producto.nombre}`}</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                required
                autoFocus
                placeholder="Cantidad de nuevas existencias"
                margin="none"
                id="existencias"
                label="Número de nuevas existencias"
                type="number"
                fullWidth
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-multiline-flexible"
                label="Descripción de la entrada"
                placeholder="Descripción de la entrada"
                multiline
                rowsMax={4}
                style={{ marginTop: 10 }}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button variant="contained" className="MainButton" onClick={handleSubmit} disabled={submitDisabled}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

FormularioExistencias.propTypes = {
  producto: productoPropType.isRequired,
  AgregarExistencias: PropTypes.func.isRequired,
};

export default connect(null, productosActions)(FormularioExistencias);
