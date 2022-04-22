import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";

store.dispatch(setLanguage('uk'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 12, name: 'water' }));
store.dispatch(removeProduct(76));
store.dispatch(setUser({ name: 'Jack' }));
store.dispatch(setUser({ name: 'Jack12' }));
store.dispatch(removeUser());

console.log(store.getState());