import { createStore } from 'redux';
import usersReducer from './users.reducer.js';
export default createStore(usersReducer);