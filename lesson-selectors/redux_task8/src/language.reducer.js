import { SET_LANGUAGE } from "./language.actions";

const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { state: action.payload }
        default:
            return state;
    }
}