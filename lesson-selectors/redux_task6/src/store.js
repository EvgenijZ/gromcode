import { createStore, combineReducers } from 'redux'
import userReducer from './users.reducer.js';
import counterReducer from './counter.reducer.js';

const appReducer = {
    users: userReducer,
    counter: counterReducer
}

const store = createStore(combineReducers(appReducer), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;