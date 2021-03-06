import {
  TODOS_PRODUCTOS, REGISTRAR_PRODUCTO, SELECCIONAR_PRODUCTO, AGREGAR_EXISTENCIAS,
  ACTUALIZAR_PRODUCTO, DESHABILITAR_PRODUCTO, HABILITAR_PRODUCTO,
} from '../types/productosTypes';

const INITIAL_STATE = {
  listaProductos: [],
  productoSeleccionado: {},
  registrado: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_PRODUCTOS:
      return { ...state, listaProductos: action.payload };
    case REGISTRAR_PRODUCTO:
      return { ...state, listaProductos: action.payload };
    case ACTUALIZAR_PRODUCTO:
      return { ...state, listaProductos: action.payload };
    case SELECCIONAR_PRODUCTO:
      return { ...state, productoSeleccionado: action.payload };
    case HABILITAR_PRODUCTO:
      return { ...state, productoSeleccionado: action.payload };
    case DESHABILITAR_PRODUCTO:
      return { ...state, productoSeleccionado: action.payload };
    case AGREGAR_EXISTENCIAS:
      return state;
    default:
      return state;
  }
};

export default reducer;
