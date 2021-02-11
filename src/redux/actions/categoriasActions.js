import { TODAS_CATEGORIAS, SELECCIONAR_CATEGORIA } from '../types/categoriasTypes';
import { GET, BASE_URL } from './requestsHandler';

export const GetAllCategorias = () => async (dispatch) => {
  const categoriesResponse = await GET(`${BASE_URL}getCategorias`);
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

export const SeleccionarCategoria = (categoria) => async (dispatch) => {
  try {
    dispatch({
      type: SELECCIONAR_CATEGORIA,
      payload: categoria,
    });
  } catch (error) {
    console.log(error);
  }
};
