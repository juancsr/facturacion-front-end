import { REPORTE_PRODUCTOS, REPORTE_VENEDORES } from '../types/reportesTypes';

const INITIAL_STATE = {
  descargandoReporte: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPORTE_PRODUCTOS:
    case REPORTE_VENEDORES:
      return { ...state, descargandoReporte: true };
    default:
      return state;
  }
};

export default reducer;
