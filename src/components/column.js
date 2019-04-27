import React from 'react';

import WeatherDetails from './column-details/weather-details.js';


function Column(props) {
  return (
    <section>
      <h3>{props.children}</h3>
      <WeatherDetails data={props.data} />
    </section>
  )
}

export default Column;
