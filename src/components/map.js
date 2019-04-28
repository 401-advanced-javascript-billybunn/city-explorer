import React from 'react';

function Map(props) {
  return <img id="map" className={props.hide ? 'hide' : ''} src="https://via.placeholder.com/400" alt="Map of search query" />;
}

export default Map;
