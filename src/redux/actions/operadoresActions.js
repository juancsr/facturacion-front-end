import { GET_ALL_VENDEDORES, SELECCIONAR_VENDEDOR } from '../types/operadoresTypes';
import { GET, BASE_URL } from './requestsHandler';

export const GetAllVendedores = () => async (dispatch) => {
  const response = await GET(`${BASE_URL}getVendedores`);
  try {
    dispatch({
      type: GET_ALL_VENDEDORES,
      payload: response.data,
    });
  } catch (error) {
    console.log('error obteniedo clientes: ', error);
  }
};

export const SelecionarVendedor = (vendedor) => async (dispatch) => {
  dispatch({
    type: SELECCIONAR_VENDEDOR,
    payload: vendedor,
  });
};

export const RegistrarCliente = () => 'welcome';
