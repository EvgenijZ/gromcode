import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 11, name: 'Olha' }));
store.dispatch(addUser({ id: 22, name: 'Jack' }));
store.dispatch(deleteUser(22));

store.subscribe(() => {
    console.log(store.getState());
});
