/* eslint-disable */
import {
  TODOS_PRODUCTOS, REGISTRAR_PRODUCTO, SELECCIONAR_PRODUCTO, AGREGAR_EXISTENCIAS,
  ACTUALIZAR_PRODUCTO, DESHABILITAR_PRODUCTO, HABILITAR_PRODUCTO,
} from '../types/productosTypes';
import {
  GET, POST, PUT, BASE_URL,
} from './requestsHandler';

export const GetAllProductos = () => async (dispatch) => {
  try {
    const url = `${BASE_URL}getProducts`;
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
  try {
    const url = `${BASE_URL}addProduct`;
    const productsResponse = await POST(url, producto);
    dispatch({
      type: REGISTRAR_PRODUCTO,
      payload: productsResponse.data,
    });
  } catch (error) {
  // eslint-disable-next-line no-console
    console.error('error al registrar el producto: ', error);
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
    const url = `${BASE_URL}addExistenciasProducto`;
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

export const ActualizarProducto = (producto) => async (dispatch) => {
  try {
    const url = `${BASE_URL}updateProduct`;
    const response = await PUT(url, producto);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: ACTUALIZAR_PRODUCTO,
      });
      dispatch(GetAllProductos());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error actualizando el producto', error);
  }
};

export const DeshabilitarProducto = (id_producto) => async (dispatch) => {
  try {
    const url = `${BASE_URL}deshabilitarProducto`;
    const data = {
      "id_producto": id_producto,
    };
    const response = await PUT(url, data);
    if (response.data.message === 'ok') {
      dispatch({
        type: DESHABILITAR_PRODUCTO,
      });
      dispatch(GetAllProductos());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error deshabilitando el producto', error);
  }
};

export const HabilitarProducto = (id_producto) => async (dispatch) => {
  try {
    const url = `${BASE_URL}habilitarProducto`;
    const data = {
      "id_producto": id_producto,
    };
    const response = await PUT(url, data);
    if (response.data.message === 'ok') {
      dispatch({
        type: HABILITAR_PRODUCTO,
      });
      dispatch(GetAllProductos());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error deshabilitando el producto', error);
  }
};
