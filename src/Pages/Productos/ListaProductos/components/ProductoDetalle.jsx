import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { GetAllCategorias } from '../../../../redux/actions/categoriasActions';
import { ActualizarProducto } from '../../../../redux/actions/productosAction';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  blackLetter: {
    color: 'black !important',
  },
  detailDialog: {
    width: '70%',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DetalleDialogPlugin = ({
  // eslint-disable-next-line no-shadow
  producto, GetAllCategorias, ActualizarProducto, categoriaReducer,
}) => {
  const [open, setOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  // info del producto
  const [name, setName] = useState(producto.nombre);
  const [code, setCode] = useState(producto.codigo);
  const [estado, setEstado] = useState(producto.estado);
  const [price, setPrice] = useState(producto.precio_unidad);
  const [categorias, setCategorias] = useState([]);
  // const states = ['Activo', 'Deshabilitado'];
  console.log(producto);

  useEffect(() => {
    GetAllCategorias();
    setCategorias(categoriaReducer.listaCategorias);
    console.log(categorias);
  }, [open]);

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => {
    setOpen(false);
    setIsEditable(false);
  };
  const enableEdit = () => setIsEditable(true);
  const handleUpdate = () => {
    const data = {};
    ActualizarProducto(data);
    setIsEditable(false);
  };

  return (
    <>
      <Tooltip title="Ver detalle del producto">
        <IconButton onClick={handleClickOpen}>
          <CallMadeIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClickClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <DialogTitle onClose={handleClickClose}>
          <h4>{producto.nombre}</h4>
          <>{open}</>
        </DialogTitle>
        <DialogContent>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="none"
                fullWidth
                disabled={!isEditable}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del producto"
                label="Nombre del producto"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled={!isEditable}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Código del producto"
                label="Código del producto"
              />
            </Grid>

            <Grid item xs={6}>
              <InputLabel id="select-state">Estado del producto</InputLabel>
              <Select
                fullWidth
                label="label"
                labelId="select-state"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                disabled={!isEditable}
              >
                <MenuItem value="" disabled>{producto.estado}</MenuItem>
                <MenuItem value="Activo">Activo</MenuItem>
                <MenuItem value="Deshabilitado">Deshabilitado</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled={!isEditable}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Valor por unidad"
                label="Valor por unidad"
                type="number"
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <InputLabel>Categoría</InputLabel>
                <Select
                  defaultValue="Selecciona una "
                  onChange={(e) => setCategorias(e.target.value)}
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClickClose} color="primary">
            Cerrar
          </Button>
          {isEditable
            ? (
              <Button autoFocus onClick={handleUpdate} color="primary" variant="contained">
                Guardar
              </Button>
            )
            : (
              <Button autoFocus onClick={enableEdit} color="primary" variant="contained">
                Editar
              </Button>
            )}
        </DialogActions>
      </Dialog>
    </>
  );
};

DetalleDialogPlugin.propTypes = {
  producto: PropTypes.shape({
    id_producto: PropTypes.number,
    codigo: PropTypes.string,
    nombre: PropTypes.string,
    precio_unidad: PropTypes.number,
    id_categoria: PropTypes.number,
    existencias: PropTypes.number,
    iva: PropTypes.number,
    estado: PropTypes.string,
    descripcion: PropTypes.string,
  }).isRequired,
  GetAllCategorias: PropTypes.func.isRequired,
  ActualizarProducto: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  categoriaReducer: PropTypes.array.isRequired,
};

const mapDispatchToProps = { GetAllCategorias, ActualizarProducto };
const mapStateToProps = (categoriaReducer) => ({ categoriaReducer });

export default connect(mapStateToProps, mapDispatchToProps)(DetalleDialogPlugin);
