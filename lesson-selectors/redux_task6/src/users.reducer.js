import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions'

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
        case UPDATE_USER:
            const newUserList = state.usersList.map(user => {
                if (user.id === action.payload.userId) {
                    return {
                        ...user,
                        ...action.payload.userData
                    }
                }
                return user;
            })
            return {
                ...state,
                usersList: newUserList
            };
        default:
            return state;
    }
}