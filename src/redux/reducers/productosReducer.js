import { TODOS_PRODUCTOS, REGISTRAR_PRODUCTO } from '../types/productosTypes';

const INITIAL_STATE = {
  listaProductos: [],
  registrado: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_PRODUCTOS:
      return { ...state, listaProductos: action.payload };
    case REGISTRAR_PRODUCTO:
      return { ...state, registrado: action.payload };
    default:
      return state;
  }
};

export default reducer;
