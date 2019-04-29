import React from 'react';

function WeatherDetails(props) {
  return (
    <>
      <h3>Results from the Dark Sky API</h3>
      <ul className="weather-results">
        {
          props.data.map((day, idx) => <li key={idx}>
            The forecast for {day.time} is: {day.forecast}
          </li>)
        }
      </ul>
    </>
  );
}

export default WeatherDetails;
