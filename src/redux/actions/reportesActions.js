import { REPORTE_PRODUCTOS, REPORTE_VENEDORES } from '../types/reportesTypes';
import { GET_FILE_DOWNLOAD, BASE_URL } from './requestsHandler';

export const DescargarReporteProductos = () => async (dispatch) => {
  try {
    const url = `${BASE_URL}getProductoMasVendido`;
    await GET_FILE_DOWNLOAD(url, 'reporte_productos');
    dispatch({
      type: REPORTE_PRODUCTOS,
    });
  } catch (error) {
    console.log(`No se pudo descargar el reporte de productos: ${error}`);
  }
};

export const DescargarReporteVendedores = () => async (dispatch) => {
  try {
    const url = `${BASE_URL}getVendedorMasFacturas`;
    await GET_FILE_DOWNLOAD(url, 'reporte_vendedores');
    dispatch({
      type: REPORTE_VENEDORES,
    });
  } catch (error) {
    console.log(`No se pudo descargar el reporte de productos: ${error}`);
  }
};
