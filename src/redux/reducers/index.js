import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import notificationReducer from './notificationReduer';
import categoriaReducer from './categoriaReducer';
import productosReducer from './productosReducer';
import facturasReducer from './facturasReducer';

export default combineReducers({
  loginReducer,
  notificationReducer,
  categoriaReducer,
  productosReducer,
  facturasReducer,
});
