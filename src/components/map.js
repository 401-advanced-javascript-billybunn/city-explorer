import React from 'react';

function Map(props) {
  return <img id="map" className={props.hide ? 'hide' : ''} src={props.url} alt="Map of search query" />;
}

export default Map;
