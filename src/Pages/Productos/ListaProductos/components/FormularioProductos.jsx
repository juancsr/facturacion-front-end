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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { GetAllCategorias } from '../../../../redux/actions/categoriasActions';
import { RegistrarProducto } from '../../../../redux/actions/productosAction';

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

// eslint-disable-next-line no-shadow
// eslint-disable-next-line react/prop-types
const Formulario = ({
  // eslint-disable-next-line react/prop-types
  openModal, setOpenModal, categoriaReducer, GetAllCategorias, RegistrarProducto,
}) => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    GetAllCategorias();
    // eslint-disable-next-line react/prop-types
    setCategorias(categoriaReducer.listaCategorias);
  }, [openModal]);

  const classes = useStyles();

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(categorias[0]);
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  // Reset all the input values
  const resetValues = () => {
    setCode('');
    setName('');
    setDescription('');
    setPrice(0);
    setCategory(null);
  };

  // TODO: Cambiar la llamada al endpoint por un evento administrado por redux
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      codigo: code,
      nombre: name,
      descripcion: description,
      precio_unidad: price,
      id_categoria: category,
    };
    console.log('data: ', data);
    setShowMessage(true);
    setOpenModal(false);
    RegistrarProducto(data);
    resetValues();
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title" className={classes.header}>Registrar nuevo producto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormHelperText>
              Todos los campos marcados con un asterisco (*) son obligatorios.
            </FormHelperText>
          </DialogContentText>

          <form>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  required
                  autoFocus
                  placeholder="Código del producto"
                  margin="none"
                  id="code"
                  label="Código"
                  type="text"
                  size="small"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormHelperText>Código de barras del producto</FormHelperText>
                <p className={classes.codeBarLabel}>{code}</p>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nombre"
                  placeholder="Nombre del producto"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                  label="Precio por unidad"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl>
                  <InputLabel>Categoría</InputLabel>
                  {/* TODO: Actualizar con valores reales de categorias */}
                  <Select
                    defaultValue="Selecciona una "
                    onChange={(e) => setCategory(e.target.value)}
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
              </Grid>

              {category != null
                ? (
                  <>
                    <Grid item xs={6}>
                      <FormHelperText>
                        Valor de IVA del producto:
                        {category.iva}
                        %
                      </FormHelperText>
                    </Grid>
                  </>
                )
                : <></>}

              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Descripción"
                  placeholder="Descripción del producto"
                  multiline
                  rowsMax={4}
                  style={{ marginTop: 10 }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {category != null && price > 0
                ? (
                  <Grid item xs={6}>
                    <p style={{ fontSize: 14 }}>
                      <b>
                        Precio total por unidad: $
                        {category.iva * price}
                      </b>
                    </p>
                  </Grid>
                ) : <></>}
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

Formulario.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

// eslint-disable-next-line max-len
const mapStateToProps = ({ categoriaReducer, productosReducer }) => ({ categoriaReducer, productosReducer });

const mapDispatchToProps = { GetAllCategorias, RegistrarProducto };

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
