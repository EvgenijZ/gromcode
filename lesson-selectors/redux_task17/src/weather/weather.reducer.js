import { FETCH_WEATHER_DATA } from "./weather.actions";

const initialState = {
    citiesList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_DATA:
            return {
                ...state,
                citiesList: action.payload
            }
        default:
            return state;
    }
}