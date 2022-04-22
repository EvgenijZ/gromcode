import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

const newUser = { id: 76, name: 'Sarah' };
setTimeout(() => store.dispatch(addUser(newUser)), 3000);
setTimeout(() => store.dispatch(deleteUser(76)), 5000);
store.subscribe(() => console.log(store.getState()));