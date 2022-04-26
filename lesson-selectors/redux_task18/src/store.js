import { createStore, applyMiddleware, compose } from 'redux';
import todosReducer from './Todo/todo.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(todosReducer, composeEnhancers(applyMiddleware(thunk)));