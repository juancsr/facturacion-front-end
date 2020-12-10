import {
  TODAS_FACTURAS, REGISTRAR_FACTURA, FACTURAS_HABILITADAS, FACTURAS_DESHABILITADAS, CARGANDO,
  ERROR, PRODUCTOS_FACTURA, ABRIR_FORMULARIO_FACTURA, PRODUCTOS_NUEVA_FACTURA,
} from '../types/facturacionTypes';

const INITIAL_STATE = {
  listaFacturas: [],
  facturasHabilitadas: true,
  cargando: false,
  error: '',
  productos_factura: [],
  formularioFacturaAbierto: false,
  productosNuevaFactura: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODAS_FACTURAS:
    case FACTURAS_HABILITADAS:
    case FACTURAS_DESHABILITADAS:
      return {
        ...state, listaFacturas: action.payload, cargando: false, error: '',
      };
    case REGISTRAR_FACTURA:
      return {
        ...state, cargando: false, error: '',
      };
    case PRODUCTOS_FACTURA:
      return {
        ...state, productos_factura: action.payload, cargando: false, error: '',
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, payload: action.payload, cargando: false };
    case ABRIR_FORMULARIO_FACTURA:
      return { ...state, formularioFacturaAbierto: action.payload, productosNuevaFactura: [] };
    case PRODUCTOS_NUEVA_FACTURA:
      state.productosNuevaFactura.push(action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
