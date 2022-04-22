import { createStore } from 'redux';
import usersReducer from './users.reducers';

export const baseState = { usersList: [] };
export default createStore(usersReducer);

