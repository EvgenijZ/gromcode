import { ADD, REMOVE } from './users.actions.js';

const initialState = { usersList: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(action.payload)
            }
        case REMOVE:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.payload)
            };
        default: state;
    }
}