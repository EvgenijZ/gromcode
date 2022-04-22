import { ADD_USER, REMOVE_USER } from './users.actions.js';

const initialState = { usersList: [] }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                usersList: [...state.usersList, action.payload]
            }
        case REMOVE_USER:
            return {
                ...state,
                usersList: state.usersList.filter(({ id }) => id !== action.payload)
            };
        default: state;
    }
}