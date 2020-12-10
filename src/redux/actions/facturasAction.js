import {
  TODAS_FACTURAS, REGISTRAR_FACTURA, FACTURAS_HABILITADAS, FACTURAS_DESHABILITADAS, CARGANDO,
  ERROR, PRODUCTOS_FACTURA, ABRIR_FORMULARIO_FACTURA, PRODUCTOS_NUEVA_FACTURA,
} from '../types/facturacionTypes';
import { GET, POST } from './requestsHandler';

const baseUrl = 'http://localhost:3010/';

const cargando = () => async (dispatch) => dispatch({ type: CARGANDO });
const dispatchError = (msg) => async (dispatch) => dispatch({ type: ERROR, payload: msg });

export const GetAllFacturas = () => async (dispatch) => {
  dispatch(cargando());
  try {
    const url = `${baseUrl}getFactura`;
    const facturasResponse = await GET(url);
    dispatch({
      type: TODAS_FACTURAS,
      payload: facturasResponse.data,
    });
  } catch (error) {
    dispatch(dispatchError('No pudo filtrar por todas las facturas'));
  }
};

export const GetAllFacturasHabilitadas = () => async (dispatch) => {
  dispatch(cargando());

  try {
    const url = `${baseUrl}getFacturaHabilitada`;
    const facturasHabilitadasResponse = await GET(url);
    dispatch({
      type: FACTURAS_HABILITADAS,
      payload: facturasHabilitadasResponse.data,
    });
  } catch (error) {
    dispatch(dispatchError('No hay datos de facturas habilitadas'));
  }
};

export const GetAllFacturasDeshabilitadas = () => async (dispatch) => {
  dispatch(cargando());

  try {
    const url = `${baseUrl}getFacturaAnulada`;
    const facturasDeshabilitadasResponse = await GET(url);
    dispatch({
      type: FACTURAS_DESHABILITADAS,
      payload: facturasDeshabilitadasResponse.data,
    });
  } catch (error) {
    dispatch(dispatchError('No hay datos de facturas deshabilitadas'));
  }
};

export const RegistrarFactura = (factura) => async (dispatch) => {
  dispatch(cargando());

  try {
    const url = `${baseUrl}addFactura`;
    const facturaResponse = await POST(url, factura);
    dispatch({
      type: REGISTRAR_FACTURA,
      payload: facturaResponse.data,
    });
  } catch (error) {
    dispatch(dispatchError('No se pudo registrar la factura'));
  }
};

export const SetFacturasHabilitadas = (habilitar) => async (dispatch) => {
  try {
    dispatch({
      type: FACTURAS_HABILITADAS,
      payload: habilitar,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error en SetFacturasHabilidatas: ', error);
  }
};

export const GetProductosFactura = (idFactura) => async (dispatch) => {
  try {
    const url = `${baseUrl}getDetalleFactura`;
    const response = await POST(url, idFactura);
    dispatch({
      type: PRODUCTOS_FACTURA,
      payload: response.data,
    });
  } catch (error) {
    dispatch(dispatchError('No se pudo obtener el detalle de esta factura'));
  }
};

export const AbrirFormularioRegistro = (abierto = true) => async (dispatch) => {
  dispatch({
    type: ABRIR_FORMULARIO_FACTURA,
    payload: abierto,
  });
};

export const AgregarProductoACarrito = (producto) => async (dispatch) => {
  dispatch({
    type: PRODUCTOS_NUEVA_FACTURA,
    payload: producto,
  });
};
