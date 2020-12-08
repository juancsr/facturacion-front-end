import {
  TODAS_FACTURAS, REGISTRAR_FACTURA, FACTURAS_HABILITADAS, FACTURAS_DESHABILITADAS,
} from '../types/facturacionTypes';
import { GET, POST } from './requestsHandler';

const baseUrl = 'http://localhost:3010/';

export const GetAllFacturas = () => async (dispatch) => {
  try {
    const url = `${baseUrl}getFactura`;
    const facturasResponse = await GET(url);
    dispatch({
      type: TODAS_FACTURAS,
      payload: facturasResponse.data,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error obteniendo facturas: ', error);
  }
};

export const GetAllFacturasHabilitadas = () => async (dispatch) => {
  try {
    const url = `${baseUrl}getFacturaHabilitada`;
    const facturasHabilitadasResponse = await GET(url);
    dispatch({
      type: FACTURAS_HABILITADAS,
      payload: facturasHabilitadasResponse.data,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error obteniendo facturas: ', error);
  }
};

export const GetAllFacturasDeshabilitadas = () => async (dispatch) => {
  try {
    const url = `${baseUrl}getFacturaAnulada`;
    const facturasDeshabilitadasResponse = await GET(url);
    dispatch({
      type: FACTURAS_DESHABILITADAS,
      payload: facturasDeshabilitadasResponse.data,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error obteniendo facturas deshabilitadas: ', error);
  }
};

export const RegistrarFactura = (factura) => async (dispatch) => {
  try {
    const url = `${baseUrl}addFactura`;
    const facturaResponse = await POST(url, factura);
    dispatch({
      type: REGISTRAR_FACTURA,
      payload: facturaResponse.data,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error al registrar la factura: ', error);
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
