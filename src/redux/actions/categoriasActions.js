import TODAS_CATEGORIAS from '../types/categoriasTypes';
import { GET, BASE_URL } from './requestsHandler';

export const GetAllCategorias = () => async (dispatch) => {
  const categoriesResponse = await GET(`${BASE_URL}/getCategorias`);
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
