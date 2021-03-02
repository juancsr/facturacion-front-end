import sha256 from 'crypto-js/sha256';
import { LOGIN, GET_USERNAME, ASSING_USER_TYPE } from '../types/loginTypes';
import { POST, BASE_URL } from './requestsHandler';

const USER_TOKEN_KEY = 'user_token';
// const USERNAME_KEY = 'username';
const NOMBRE_USUARIO = 'name';

const SetUserType = (type) => async (dispatch) => {
  dispatch({
    type: ASSING_USER_TYPE,
    payload: type,
  });
};

const createSessionCookie = (key, value) => sessionStorage.setItem(key, value);
const removeSessionCookie = (key) => sessionStorage.removeItem(key);

export const AsingarDatosUsuario = (username) => async (dispatch) => {
  try {
    const response = await POST(`${BASE_URL}getUserInfo`, { username });
    if (response.status === 200) {
      dispatch({
        type: GET_USERNAME,
        payload: response.data[0].nombre_persona,
      });
      // createSessionCookie(USERNAME_KEY, username);
      createSessionCookie(NOMBRE_USUARIO, response.data[0].nombre_persona);
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
        createSessionCookie(USER_TOKEN_KEY, userToken);
        dispatch(AsingarDatosUsuario(username));
      }
    }
  } catch (error) {
    console.log('error iniciando sesión: ', error);
  }
};

export const CheckActiveSession = () => async (dispatch) => {
  const userToken = sessionStorage.getItem(USER_TOKEN_KEY);
  // const username = sessionStorage.getItem(USERNAME_KEY);
  const nombreUsuario = sessionStorage.getItem(NOMBRE_USUARIO);

  let activeSession = false;
  if (userToken !== null) {
    activeSession = true;
    dispatch({
      type: GET_USERNAME,
      payload: nombreUsuario,
    });
  }
  dispatch({
    type: LOGIN,
    session: activeSession,
  });
};

export const CerrarSesion = () => async (dispatch) => {
  removeSessionCookie(USER_TOKEN_KEY);
  removeSessionCookie(NOMBRE_USUARIO);
  dispatch({
    type: LOGIN,
    session: false,
  });
};
