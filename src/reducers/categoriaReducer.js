import TODAS_CATEGORIAS from '../redux/types/categoriasTypes';

const INITIAL_STATE = {
  listaCategorias: [],
  agregarCategoria: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODAS_CATEGORIAS:
      return { ...state, listaCategorias: action.payload };
    default:
      return state;
  }
};

export default reducer;
