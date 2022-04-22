import store from './store.js';
import { add, remove } from './users.actions.js';

const newUser = { id: 76, name: 'Sarah' };

setTimeout(() => store.dispatch(add(newUser)), 3000);
setTimeout(() => store.dispatch(remove(76)), 5000);

store.subscribe(() => console.log(store.getState()));