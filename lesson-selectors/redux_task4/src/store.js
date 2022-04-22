import { createStore } from 'redux';

const DECREMENT = 'COUNTER/DECREMENT';
const INCREMENT = 'COUNTER/INCREMENT';
const RESET = 'COUNTER/RESET';
const baseState = {
    history: []
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

const counterReducer = (state = baseState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                history: state.history.concat(+1)
            }
        case DECREMENT:
            return {
                ...state,
                history: state.history.concat(-1)
            }
        case RESET:
            return {
                ...state,
                history: []
            }
        default: return state;
    }
}

export default createStore(counterReducer);