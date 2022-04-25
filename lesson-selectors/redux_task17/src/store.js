import { createStore, applyMiddleware, compose } from 'redux';
import weatherReducer from './weather/weather.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(weatherReducer, composeEnhancers(applyMiddleware(thunk)));