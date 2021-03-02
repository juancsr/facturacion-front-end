import sha256 from 'crypto-js/sha256';
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

const generateSha256Code = function (message) {
  const nonce = 'a';
  const hashDigest = sha256(nonce + message);
  return hashDigest;
};

const createSessionCookie = (key, value) => sessionStorage.setItem(key, value);

export const LoginAction = (username, password) => async (dispatch) => {
  try {
    const response = await POST(`${BASE_URL}revUsername`, { username, password });
    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: response.data.message,
        session: response.data.login,
      });
      if (response.data.login) {
        const userToken = generateSha256Code(username);
        createSessionCookie('user_token', userToken);
        dispatch(AsingarDatosUsuario(username));
      }
    }
  } catch (error) {
    console.log('error iniciando sesión: ', error);
  }
};

export const CheckActiveSession = () => async (dispatch) => {
  const userToken = sessionStorage.getItem('user_token');
  console.log(userToken);
  let activeSession = false;
  if (userToken !== null) {
    activeSession = true;
  }
  dispatch({
    type: LOGIN,
    session: activeSession,
  });
};
