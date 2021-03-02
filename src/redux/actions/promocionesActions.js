import { ENVIAR_PROMOCION_MASIVA } from '../types/promocionesTypes';
import { GET, BASE_URL } from './requestsHandler';

export const EnviarPromocionMasiva = () => async (dispatch) => {
  try {
    const url = `${BASE_URL}getCorreoMasivo`;
    await GET(url);
    dispatch({
      type: ENVIAR_PROMOCION_MASIVA,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error enviado promoción masiva: ', error);
  }
};

export const useless = 'a';
