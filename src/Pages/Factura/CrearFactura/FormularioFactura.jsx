/* eslint-disable no-shadow */
import React, {
  useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { connect } from 'react-redux';
import { AbrirFormularioRegistro } from '../../../redux/actions/facturasAction';
import { GetAllProductos } from '../../../redux/actions/productosAction';
import { GetAllClientes } from '../../../redux/actions/clientesActions';
import { productosReducerPropTypes, facturacionReducerPropTypes } from '../../../propTypes/reducersPropTypes';
import SelectCliente from './components/SelectClientes';

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

const FormularioFactura = ({
  productosReducer, facturasReducer, AbrirFormularioRegistro, GetAllProductos, GetAllClientes,
}) => {
  useEffect(() => {
    if (facturasReducer.formularioFacturaAbierto) {
      GetAllProductos();
      GetAllClientes();
      console.log(productosReducer.listaProductos);
    }
  }, [facturasReducer.formularioFacturaAbierto]);

  const handleClickOpenForm = () => AbrirFormularioRegistro();

  const classes = useStyles();

  const handleClose = () => {
    AbrirFormularioRegistro(false);
  };

  const [codigo, setCodigo] = useState('');
  const [fechaCompra, setFechaCompra] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  // Reset all the input values
  // const resetValues = () => {
  //   setCode('');
  //   setName('');
  //   setDescription('');
  //   setPrice(0);
  //   setCategory(null);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const data = {
      codigo: code,
      nombre: name,
      descripcion: description,
      // precio_unidad: price,
      id_categoria: category.id_categoria,
    }; */
    // setShowMessage(true);
    AbrirFormularioRegistro(false);
    // RegistrarProducto(data);
    // resetValues();
  };

  return (
    <div>
      <div style={{ textAlign: 'right', marginRight: 40 }}>
        <Tooltip title="Regisrtar nueva factura">
          <Button onClick={handleClickOpenForm} variant="contained" size="small" color="primary" className="MainButton">
            <AddBoxIcon />
            Registrar factura
          </Button>
        </Tooltip>
      </div>
      <Dialog fullScreen open={facturasReducer.formularioFacturaAbierto} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title" className={classes.header}>Registrar nueva factura</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormHelperText>
              Todos los campos marcados con un asterisco (*) son obligatorios.
            </FormHelperText>
          </DialogContentText>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Información de la factura
                </Typography>
                <br />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  autoFocus
                  placeholder="Código de la factura"
                  margin="none"
                  id="code"
                  label="Código de la factura"
                  type="text"
                  fullWidth
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TextField
                    id="date"
                    label="Fecha de compra"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={fechaCompra}
                    onChange={(e) => setFechaCompra(e.target.value)}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                <SelectCliente />
              </Grid>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button variant="contained" className="MainButton" onClick={handleSubmit}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
          // key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={showMessage}
        hidden={showMessage}
        autoHideDuration={6000}
        onClose={handleClose}
          // onExited={handleExited}
        message="Registrado"
        action={(
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              Deshacer
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
                // className={classes.close}
              onClick={() => setShowMessage(false)}
            >
              <CloseIcon />
            </IconButton>
          </>
          )}
      />
    </div>
  );
};

FormularioFactura.propTypes = {
  productosReducer: productosReducerPropTypes.isRequired,
  facturasReducer: facturacionReducerPropTypes.isRequired,
  AbrirFormularioRegistro: PropTypes.func.isRequired,
  GetAllProductos: PropTypes.func.isRequired,
  GetAllClientes: PropTypes.func.isRequired,
};

const mapStateToProps = ({ productosReducer, facturasReducer, clientesReducer }) => (
  { productosReducer, facturasReducer, clientesReducer });

const mapDispatchToProps = { AbrirFormularioRegistro, GetAllProductos, GetAllClientes };

export default connect(mapStateToProps, mapDispatchToProps)(FormularioFactura);
