import axios from 'axios';
import TODAS_CATEGORIAS from '../types/categoriasTypes';

const https = require('https');

export const GetAllCategorias = () => async (dispatch) => {
  // TODO: Corregir
  // const categoriesResponse = await axios.get('https://localhost:3010/getCategorias');
  const url = 'http://localhost:3010/getCategorias';
  const categoriesResponse = await axios({
    url,
    method: 'GET',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  try {
    dispatch({
      type: TODAS_CATEGORIAS,
      payload: categoriesResponse.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const RegistrarCategoria = () => 'welcome';
