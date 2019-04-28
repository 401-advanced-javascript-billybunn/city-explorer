import React from 'react';
import Column from './column.js';

// IMPORTANT: each file in 'src/components/column-details' must match the names of the 5 3rd party resouces as listed in 'src/fetcher.js'
// e.g., "weather-details.js", "yelp-details.js", etc.

function ColumnContainer(props) {
  let classes = props.hide ? 'column-container hide' : 'column-container';
  return (
    <div className={classes}>
      {Object.keys(props.data).map((type, idx) => <Column key={idx} type={type} data={props.data[type]} />)}
    </div>
  );
}

export default ColumnContainer;
