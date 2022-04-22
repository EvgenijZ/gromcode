import { INCREMENT, DECREMENT, RESET } from './counter.actions'

const initialState = 0;

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { state: state + 1 };
        case DECREMENT:
            return { state: state - 1 };
        case RESET:
            return { state: 0 };
        default:
            return state;
    }
}