import { createStore } from 'redux';
import userReducer from './users/users.reducer';
export default createStore(userReducer);