import React from 'react';

function WeatherDetails(props) {
  console.log(props.data);
  return (
    <ul className="weather-results">
    <li>weather stuff</li>
    <li>weather stuff</li>
    <li>weather stuff</li>
    </ul>
  )
}

export default WeatherDetails;
