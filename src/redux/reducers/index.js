import { combineReducers } from 'redux';
import taskReducer from './taskReducers';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

export default rootReducer;
