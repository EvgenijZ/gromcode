import { createStore, combineReducers } from 'redux';
import { languageReducer } from "./language.reducer";
import { cartReducer } from "./cart.reducer";
import { userReducer } from "./user.reducer";

const appReducer = combineReducers({
    language: languageReducer,
    cart: cartReducer,
    user: userReducer
});

export default createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());