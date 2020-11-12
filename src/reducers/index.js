import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import notificationReducer from './notificationReduer';

export default combineReducers({
    loginReducer,
    notificationReducer
});