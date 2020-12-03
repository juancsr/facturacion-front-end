import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

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

const FormularioExistencias = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title" className={classes.header}>Registrar nuevo producto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormHelperText>
              Todos los campos marcados con un asterisco (*) son obligatorios.
            </FormHelperText>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormularioExistencias;
