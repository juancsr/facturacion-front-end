import { GET_ALL_OPERADORES, GET_ALL_VENDEDORES, SELECCIONAR_VENDEDOR } from '../types/operadoresTypes';

const INITIAL_STATE = {
  listaOperadores: [],
  listaVendedores: [],
  vendedorSeleccionado: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_OPERADORES:
      return { ...state, listaOperadores: action.payload };
    case GET_ALL_VENDEDORES:
      return { ...state, listaVendedores: action.payload };
    case SELECCIONAR_VENDEDOR:
      return { ...state, vendedorSeleccionado: action.payload };
    default:
      return state;
  }
};

export default reducer;
