import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
import CurrencyFormat from 'react-currency-format';
import FacturaProductosGrid from '../grid-productos/FacturaProductosGrid';
import { productosPropType } from '../../../../../../../../propTypes/productosPropTypes';
import * as factuasAction from '../../../../../../../../redux/actions/facturasAction';
import { facturacionReducerPropTypes } from '../../../../../../../../propTypes/reducersPropTypes';

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

const DetailDialog = ({ factura, facturasReducer, GetProductosFactura }) => {
  const [open, setOpen] = useState(false);
  const [totalIva, setTotalIva] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (open) {
      GetProductosFactura({ id_factura: factura.id_factura });
    }
  }, [open]);

  useEffect(() => {
    let auxTotalIva = 0;
    let auxTotal = 0;
    facturasReducer.productos_factura.forEach((producto) => {
      auxTotal += producto.valor_total_Producto;
      auxTotalIva += producto.valor_iva;
    });
    setTotalIva(auxTotalIva.toFixed(2));
    setTotal(auxTotal.toFixed(2));
  }, [facturasReducer.productos_factura]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      { factura
        ? (
          <>
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
                  Detalle de la factura:
                  {' '}
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
                  <Grid item xs={6}>
                    <Typography gutterBottom>
                      <b>Cliente: </b>
                      {' '}
                      {factura.cliente}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>
                      <b>Fecha de compra:</b>
                      {' '}
                      {factura.fecha_compra}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}><></></Grid>
                  <Grid item xs={4}>
                    <Typography gutterBottom>
                      <b>Fecha de registro: </b>
                      {factura.fecha_registro}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography gutterBottom><b>Productos</b></Typography>
                    <br />
                    <FacturaProductosGrid productos={facturasReducer.productos_factura} />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography gutterBottom>
                      <b>Total IVA: </b>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography gutterBottom>
                      <CurrencyFormat value={totalIva} displayType="text" thousandSeparator prefix="$" />
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography gutterBottom>
                      <b>Total Factura (IVA incluido): </b>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography gutterBottom>
                      <CurrencyFormat value={total} displayType="text" thousandSeparator prefix="$" />
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
          </>
        )
        : <></>}
    </div>
  );
};

DetailDialog.propTypes = {
  factura: PropTypes.shape({
    id_factura: PropTypes.number,
    codigo: PropTypes.string,
    vendedor: PropTypes.string,
    estado: PropTypes.string,
    cliente: PropTypes.string,
    fecha_compra: PropTypes.string,
    fecha_registro: PropTypes.string,
    valorTotal: PropTypes.number,
    productos: productosPropType,
  }).isRequired,
  facturasReducer: facturacionReducerPropTypes.isRequired,
  GetProductosFactura: PropTypes.func.isRequired,
};

const mapStateToProps = (facturasReducer) => facturasReducer;

export default connect(mapStateToProps, factuasAction)(DetailDialog);
