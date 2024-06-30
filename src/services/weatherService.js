import axios from 'axios';

const API_KEY = 'df4bb156c55e702f97d1d4d61cb4dbc3'; // Replace with your OpenWeatherMap API key

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid: API_KEY,
       
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
