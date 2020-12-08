import {
  TODAS_FACTURAS, REGISTRAR_FACTURA, FACTURAS_HABILITADAS, FACTURAS_DESHABILITADAS,
} from '../types/facturacionTypes';

const INITIAL_STATE = {
  listaFacturas: [],
  facturasHabilitadas: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODAS_FACTURAS:
    case FACTURAS_HABILITADAS:
    case FACTURAS_DESHABILITADAS:
      return { ...state, listaFacturas: action.payload };
    case REGISTRAR_FACTURA:
      return { ...state, listaFacturas: action.payload };
    default:
      return state;
  }
};

export default reducer;
