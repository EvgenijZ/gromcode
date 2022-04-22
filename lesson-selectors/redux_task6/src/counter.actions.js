export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

export function increment() {
    return {
        type: INCREMENT
    };
};

export function decrement() {
    return {
        type: DECREMENT
    };
};

export function reset() {
    return {
        type: RESET
    };
};