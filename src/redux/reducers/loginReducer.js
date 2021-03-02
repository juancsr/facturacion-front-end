import { LOGIN, GET_USERNAME, ASSING_USER_TYPE } from '../types/loginTypes';

const INITIAL_STATE = {
  activeSession: false,
  username: '',
  response: '',
  tipoUsuario: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, activeSession: action.session, response: action.payload,
      };
    case ASSING_USER_TYPE:
      return { ...state, tipoUsuario: action.payload };
    case GET_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default reducer;
