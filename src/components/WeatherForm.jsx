import React, { useState } from 'react';

const WeatherForm = ( {getWeather} ) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errors, setErrors] = useState({});

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!latitude || isNaN(latitude) || latitude < -90 || latitude > 90) {
      newErrors.latitude = 'Latitude must be a number between -90 and 90';
    }
    if (!longitude || isNaN(longitude) || longitude < -180 || longitude > 180) {
      newErrors.longitude = 'Longitude must be a number between -180 and 180';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      getWeather(latitude, longitude);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Latitude:
          <input
            type="text"
            value={latitude}
            onChange={handleLatitudeChange}
          />
        </label>
        {errors.latitude && <div style={{ color: 'red' }}>{errors.latitude}</div>}
      </div>
      <div>
        <label>
          Longitude:
          <input
            type="text"
            value={longitude}
            onChange={handleLongitudeChange}
          />
        </label>
        {errors.longitude && <div style={{ color: 'red' }}>{errors.longitude}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WeatherForm;
