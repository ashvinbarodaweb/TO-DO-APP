import { combineReducers } from 'redux';
import taskReducer from './taskReducers';
import authReducer from './authReducers';
import weatherReducer from './weatherReducer'; // Add this line

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
  weather: weatherReducer // Add this line
});

export default rootReducer;
