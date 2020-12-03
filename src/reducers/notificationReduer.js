const INITIAL_STATE = {
  productosNotf: 0,
  facturasNotf: 0,
  userNotf: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'get_productos_notf':
      return { ...state, productosNotf: action.payload };
    case 'get_factura_notf':
      return { ...state, facturasNotf: action.payload };
    case 'get_user_notf':
      return { ...state, userNotf: action.payload };
    default:
      return state;
  }
};

export default reducer;
