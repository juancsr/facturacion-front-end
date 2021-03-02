import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PaymentIcon from '@material-ui/icons/Payment';
import { GetProductosFactura, GetCabeceraFactura } from '../../redux/actions/facturasAction';
// eslint-disable-next-line no-unused-vars
import { GetAllVendedores } from '../../redux/actions/operadoresActions';
import FacturaProductosGrid from '../Factura/ListarFactura/components/grid-plugins/detalle-plugin/components/grid-productos/FacturaProductosGrid';

const PagoElectronico = ({
  match, facturasReducer, GetProductosFactura, GetCabeceraFactura,
  operadoresReducer, GetAllVendedores,
}) => {
  const [vendedor, setVendedor] = useState('');

  useEffect(() => {
    const data = { id_factura: match.params.facturaId };
    GetProductosFactura(data);
    GetCabeceraFactura(data);
    GetAllVendedores();
  }, [match.params.facturaId]);

  useEffect(() => {
    if (facturasReducer.cabeceraFactura !== null) {
      const idVendedor = parseInt(facturasReducer.cabeceraFactura.vendedor, 10);
      console.log(typeof idVendedor);
      const operador = operadoresReducer.listaVendedores.find(
        (vendedor) => vendedor.id_vendedor === idVendedor,
      );
      console.log(operador);
      if (operador !== undefined) {
        setVendedor(`${operador.nombres} ${operador.apellidos}`);
      }
    }
  }, [operadoresReducer.listaVendedores]);

  return (
    <div className="Container">
      <h2>Pagos Seguros en Línea</h2>
      { facturasReducer.cabeceraFactura !== null && facturasReducer.cabeceraFactura !== undefined && facturasReducer.cabeceraFactura.estado === 'HABILITADA'
        ? (
          <>
            <h3>{`Factura: ${facturasReducer.cabeceraFactura.codigo}`}</h3>
            <Grid container spacing={1} style={{ textAlign: 'left', marginLeft: 5 }}>
              <Grid item md={2}><b>Vendedor:</b></Grid>
              <Grid item md={10}>{vendedor}</Grid>

              <Grid item md={2}><b>Cliente:</b></Grid>
              <Grid item md={10}>{facturasReducer.cabeceraFactura.cliente}</Grid>

              <Grid item md={2}><b>Fecha de compra:</b></Grid>
              <Grid item md={10}>{facturasReducer.cabeceraFactura.fecha_compra}</Grid>

              <Grid item md={2}><b style={{ color: 'green' }}>Valor IVA: </b></Grid>
              <Grid item md={10}>{facturasReducer.cabeceraFactura.valor_total_IVA}</Grid>

              <Grid item md={2}><b style={{ color: 'green' }}>Valor IVA: </b></Grid>
              <Grid item md={10}>{facturasReducer.cabeceraFactura.valor_total}</Grid>
            </Grid>
            <b>Productos:</b>
            <FacturaProductosGrid productos={facturasReducer.productos_factura} />

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PaymentIcon />}
              style={{ marginTop: 20 }}
            >
              Pagar PSE
            </Button>
          </>
        ) : (
          <h2 style={{ color: 'red' }}> Información no encontrada </h2>
        )}
    </div>
  );
};

PagoElectronico.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  facturasReducer: PropTypes.object.isRequired,
  GetProductosFactura: PropTypes.func.isRequired,
  GetCabeceraFactura: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  operadoresReducer: PropTypes.object.isRequired,
  GetAllVendedores: PropTypes.func.isRequired,
};

const mapStateToProps = ({ facturasReducer, operadoresReducer }) => (
  { facturasReducer, operadoresReducer }
);
const mapDispatchToProps = { GetProductosFactura, GetCabeceraFactura, GetAllVendedores };

export default connect(mapStateToProps, mapDispatchToProps)(PagoElectronico);
