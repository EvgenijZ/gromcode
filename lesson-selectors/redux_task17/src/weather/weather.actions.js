import fetchWeather from './weather.gateway';
export const GET_WEATHER_DATA = 'WEATHER/GET_DATA';

export const getWeatherData = (data) => {
    return {
        type: GET_WEATHER_DATA,
        payload: data
    }
}

export const fetchWeatherData = () => {
    return (dispatch) => fetchWeather().then(data => dispatch(getWeatherData(data)));
}