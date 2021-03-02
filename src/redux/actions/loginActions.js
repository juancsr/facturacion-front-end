import { LOGIN, GET_USERNAME, ASSING_USER_TYPE } from '../types/loginTypes';
import { POST, BASE_URL } from './requestsHandler';

const SetUserType = (type) => async (dispatch) => {
  dispatch({
    type: ASSING_USER_TYPE,
    payload: type,
  });
};

export const AsingarDatosUsuario = (username) => async (dispatch) => {
  try {
    const response = await POST(`${BASE_URL}getUserInfo`, { username });
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: GET_USERNAME,
        payload: response.data[0].nombre_persona,
      });
      dispatch(SetUserType(response.data[0].tipo_de_usuario));
    }
  } catch (error) {
    console.log('error iniciando sesión: ', error);
  }
};

export const LoginAction = (username, password) => async (dispatch) => {
  try {
    const response = await POST(`${BASE_URL}revUsername`, { username, password });
    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        session: response.data.login,
      });
      if (response.data.usuario !== false) {
        dispatch(AsingarDatosUsuario(username));
      }
    }
  } catch (error) {
    console.log('error iniciando sesión: ', error);
  }
};
