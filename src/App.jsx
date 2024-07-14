import './App.css';
import WeatherForm from './components/WeatherForm';
import useWeather from './hooks/useWeather';

function App() {
  const { weather, error, getWeather } = useWeather();

  const renderWeather = () => {
    if (!weather) return null;
    const { coord, main, weather: weatherDetails } = weather;
    return (
      <div className='results-container'> 
        <h2>Weather Information</h2>
        <p>Latitude: {coord.lat}</p>
        <p>Longitude: {coord.lon}</p>
        <p>Temperature: {main.temp} °C</p>
        <p>Weather: {weatherDetails[0].description}</p>
      </div>
    );
  };

  return (
    <div className='container'>
      <h1>Weather Wizard</h1>
      <WeatherForm getWeather={getWeather} />
      {error && <p>Error: {error}</p>}
      {renderWeather()}
    </div>
  );
}

export default App;
