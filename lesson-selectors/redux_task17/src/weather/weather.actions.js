import fetchWeather from './weather.gateway';
export const FETCH_WEATHER_DATA = 'WEATHER/FETCH_DATA';

export const fetchWeatherData = (data) => {
    return {
        type: FETCH_WEATHER_DATA,
        payload: data
    }
}

export const getWeatherData = () => {
    return (dispatch) => fetchWeather().then(data => dispatch(fetchWeatherData(data)));
}