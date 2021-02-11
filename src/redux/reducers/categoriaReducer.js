import { TODAS_CATEGORIAS, SELECCIONAR_CATEGORIA } from '../types/categoriasTypes';

const INITIAL_STATE = {
  listaCategorias: [],
  agregarCategoria: {},
  categoriaSeleccionada: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODAS_CATEGORIAS:
      return { ...state, listaCategorias: action.payload };
    case SELECCIONAR_CATEGORIA:
      return { ...state, categoriaSeleccionada: action.payload };
    default:
      return state;
  }
};

export default reducer;
