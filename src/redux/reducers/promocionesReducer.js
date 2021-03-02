import { ENVIAR_PROMOCION_MASIVA } from '../types/promocionesTypes';

const INITIAL_STATE = {
  enviado: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENVIAR_PROMOCION_MASIVA:
      return { ...state, enviado: true };
    default:
      return state;
  }
};

export default reducer;
