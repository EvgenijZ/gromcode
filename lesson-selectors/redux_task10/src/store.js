import { createStore } from 'redux';
import userReducer from './users/users.reducer';

export default createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());