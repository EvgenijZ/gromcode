import { INCREMENT, DECREMENT, RESET } from './counter.actions'

const initialState = { counter: 0 };

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        case RESET:
            return { counter: state.counter = 0 };
        default:
            return state;
    }
}