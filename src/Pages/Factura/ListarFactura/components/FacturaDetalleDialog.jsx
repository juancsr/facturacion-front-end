import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import FacturaProductosGrid from './FacturaProductosGrid';
import { productosPropType } from '../../../../propTypes/productosPropTypes';

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

const DetailDialog = ({ factura }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open dialog
        </Button> */}
      <Tooltip title={`Ver detalle de la factura ${factura.codigo}`}>
        <IconButton onClick={handleClickOpen}>
          <CallMadeIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h4>
            Detalle de la factura
            <em>{factura.codigo}</em>
          </h4>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography gutterBottom>
                <b>Vendedor(a): </b>
                {' '}
                {factura.vendedor}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography gutterBottom>
                <b>ESTADO: </b>
                {' '}
                {factura.estado}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                <b>Cliente: </b>
                {' '}
                {factura.cliente}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom>
                <b>Fecha de compra:</b>
                {' '}
                {factura.fechaCompra}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom>
                <b>Fecha de registro: </b>
                {factura.fechaRegistro}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography gutterBottom><b>Productos</b></Typography>
              <br />
              <FacturaProductosGrid productos={factura.productos} />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                <b>Total IVA: </b>
                <span>
                  $
                  {factura.valorTotal}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                <b>Total Factura (IVA incluido): </b>
                <span>
                  $
                  {factura.valorTotal}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button autoFocus onClick={handleClose} color="primary" variant="contained">
            Descargar PDF
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DetailDialog.propTypes = {
  factura: PropTypes.shape({
    codigo: PropTypes.string,
    vendedor: PropTypes.string,
    estado: PropTypes.string,
    cliente: PropTypes.string,
    fechaCompra: PropTypes.string,
    fechaRegistro: PropTypes.string,
    valorTotal: PropTypes.number,
    productos: productosPropType,
  }).isRequired,
};

export default DetailDialog;
