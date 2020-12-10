import { OBTENER_CLIENTES, SELECIONAR_CLIENTE } from '../types/clienteTypes';
import { GET, BASE_URL } from './requestsHandler';

export const GetAllClientes = () => async (dispatch) => {
  const response = await GET(`${BASE_URL}getClientes`);
  try {
    dispatch({
      type: OBTENER_CLIENTES,
      payload: response.data,
    });
  } catch (error) {
    console.log('error obteniedo clientes: ', error);
  }
};

export const SelecionarCliente = (cliente) => async (dispatch) => {
  dispatch({
    type: SELECIONAR_CLIENTE,
    payload: cliente,
  });
};

export const RegistrarCliente = () => 'welcome';
