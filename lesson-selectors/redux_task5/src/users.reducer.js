import { ADD, REMOVE } from './users.actions.js';
import { baseState } from './store.js';

export default (state = baseState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(action.payload)
            }
        case REMOVE:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id === action.payload)
            };
        default: state;
    }
}