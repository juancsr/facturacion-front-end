import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import notificationReducer from './notificationReduer';
import categoriaReducer from './categoriaReducer';
import productosReducer from '../redux/reducers/productosReducer';

export default combineReducers({
  loginReducer,
  notificationReducer,
  categoriaReducer,
  productosReducer,
});
