import React, { Suspense } from 'react';

function WeatherDetails(props) {
  return (
    <ul className="weather-results">
      {
        props.data.map((day, idx) => <li key={idx}>
          The forecast for {day.time} is: {day.forecast}
        </li>)
      }
    </ul>
  );
}

export default WeatherDetails;
