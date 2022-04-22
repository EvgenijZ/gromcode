import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.dispatch(addUser({ id: 11, name: 'Olha' }));
store.dispatch(updateUser(11, { name: 'Olha New', age: 25 }));
store.dispatch(addUser({ id: 22, name: 'John' }));
store.dispatch(deleteUser(22));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.subscribe(() => {
    console.log(store.getState());
});
