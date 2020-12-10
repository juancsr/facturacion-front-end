import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import notificationReducer from './notificationReduer';
import categoriaReducer from './categoriaReducer';
import productosReducer from './productosReducer';
import facturasReducer from './facturasReducer';
import clientesReducer from './clientesReducer';
import operadoresReducer from './operadoresReducer';

export default combineReducers({
  loginReducer,
  notificationReducer,
  categoriaReducer,
  productosReducer,
  facturasReducer,
  clientesReducer,
  operadoresReducer,
});
