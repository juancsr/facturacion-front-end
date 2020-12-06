import {
  TODOS_PRODUCTOS, REGISTRAR_PRODUCTO, SELECCIONAR_PRODUCTO, AGREGAR_EXISTENCIAS,
} from '../types/productosTypes';
import { GET, POST, PUT } from './requestsHandler';

const baseUrl = 'http://localhost:3010/';

export const GetAllProductos = () => async (dispatch) => {
  // TODO: Corregir para evitar el httpsAgent
  try {
    const url = `${baseUrl}getProducts`;
    const productsResponse = await GET(url);
    dispatch({
      type: TODOS_PRODUCTOS,
      payload: productsResponse.data,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error obteniendo productos: ', error);
  }
};

export const RegistrarProducto = (producto) => async (dispatch) => {
  // TODO: Corregir para evitar el httpsAgent
  try {
    const url = `${baseUrl}addProduct`;
    const productsResponse = await POST(url, producto);
    dispatch({
      type: REGISTRAR_PRODUCTO,
      payload: productsResponse.data,
    });
  } catch (error) {
  // eslint-disable-next-line no-console
    console.error('error obteniendo productos: ', error);
  }
};

export const SeleccionarProducto = (producto) => (dispatch) => {
  try {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: producto,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error al seleccionar producto: ', error);
  }
};

export const AgregarExistencias = ({ codigo, cantidad, descripcion }) => async (dispatch) => {
  try {
    const url = `${baseUrl}addExistenciasProducto`;
    const data = { codigo, cantidad, descripcion };
    const existenciasResponse = await PUT(url, data);
    if (existenciasResponse.data.msg === 'OK') {
      dispatch({
        type: AGREGAR_EXISTENCIAS,
      });
      dispatch(GetAllProductos());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error agregando existencias: ', error);
  }
};
