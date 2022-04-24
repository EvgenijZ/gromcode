import { createStore } from 'redux';
import optionsReducer from './options/options.reducer';
export default createStore(optionsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());