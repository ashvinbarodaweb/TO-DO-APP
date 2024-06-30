import { getWeather } from '../../services/weatherService';

export const fetchWeather = (city) => async (dispatch) => {
  try {
    const weather = await getWeather(city);
    dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: weather });
  } catch (error) {
    dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
  }
};
