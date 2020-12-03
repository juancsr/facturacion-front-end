import axios from 'axios';
import { TODOS_PRODUCTOS } from '../types/productosTypes';

const https = require('https');

export const GetAllProductos = () => async (dispatch) => {
  // TODO: Corregir para evitar el httpsAgent
  try {
    // const categoriesResponse = await axios.get('https://localhost:3010/getCategorias');
    const url = 'http://localhost:3010/getProducts';
    const productsResponse = await axios({
      url,
      method: 'GET',
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

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
    // const categoriesResponse = await axios.get('https://localhost:3010/getCategorias');
    const url = 'http://localhost:3010/addProduct';
    const productsResponse = await axios({
      url,
      method: 'POST',
      data: producto,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    dispatch({
      type: TODOS_PRODUCTOS,
      payload: productsResponse.data,
    });
  } catch (error) {
  // eslint-disable-next-line no-console
    console.log('error obteniendo productos: ', error);
  }
};
