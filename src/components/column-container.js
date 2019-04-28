import React from 'react';

import Column from './column.js';


function ColumnContainer(props) {
  let classes = props.hide ? 'column-container hide' : 'column-container';
  return (
    <div className={classes}>
      {Object.keys(props.data).map((type, idx) => <Column key={idx} type={type} data={props.data[type]} />)}
    </div>
  );
}

export default ColumnContainer;