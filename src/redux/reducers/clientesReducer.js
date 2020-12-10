import { OBTENER_CLIENTES, SELECIONAR_CLIENTE } from '../types/clienteTypes';

const INITIAL_STATE = {
  listaClientes: [],
  clienteSelecionado: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OBTENER_CLIENTES:
      return { ...state, listaClientes: action.payload };
    case SELECIONAR_CLIENTE:
      return { ...state, clienteSelecionado: action.payload };
    default:
      return state;
  }
};

export default reducer;
