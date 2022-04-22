import { ADD_USER, DELETE_USER } from './users.actions'

const initialState = {
    usersList: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                usersList: [...state.usersList, action.payload]
            };
        case DELETE_USER:
            return {
                ...state,
                usersList: state.usersList.filter(({ id }) => id !== action.payload)
            };
        default:
            return state;
    }
}