import { USER_DATA_RECEIVED, SHOW_SPINNER } from './users.actions';

const initialState = {
    userData: null,
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                isFetching: true
            }
        case USER_DATA_RECEIVED:
            return {
                ...state,
                userData: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}