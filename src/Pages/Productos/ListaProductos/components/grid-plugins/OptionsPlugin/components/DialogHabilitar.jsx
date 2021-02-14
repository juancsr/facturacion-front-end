/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { productoPropType } from '../../../../../../../propTypes/productosPropTypes';
import * as productosActions from '../../../../../../../redux/actions/productosAction';

const useStyles = makeStyles(() => ({
  header: {
    background: '#DEB887',
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
  buttons: {
    margin: '0px',
    textAlign: 'center',
  }
}));

const DialogHabilitar = ({ producto, HabilitarProducto }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const { id_producto } = producto;
    HabilitarProducto(id_producto);
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Habilitar producto">
        <Button
          className="GridButton"
          variant="contained"
          size="small"
          onClick={handleClickOpen}
          style={{ background: '#DEB887' }}
        >
          <CheckCircleIcon style={{ color: '#000' }} />
        </Button>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title" className={classes.header}>{`Habilitar producto: ${producto.nombre}`}</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                ¿Continuar?
              </Typography>
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button variant="contained" style={{ backgroundColor: "#DEB887" }} onClick={handleSubmit}>
            Habilitar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogHabilitar.propTypes = {
  producto: productoPropType.isRequired,
  HabilitarProducto: PropTypes.func.isRequired,
};

export default connect(null, productosActions)(DialogHabilitar);
