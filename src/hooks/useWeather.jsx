import { useState } from 'react';

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60dbde6880da59484d77ebba1bf96d9b&units=imperial`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {

      console.error("uh oh something happened", err)
      setError(err.message);
      setWeather(null);
    }
  };

  return { weather, error, getWeather };
};

export default useWeather;
