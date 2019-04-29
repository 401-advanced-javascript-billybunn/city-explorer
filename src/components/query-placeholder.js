import React from 'react';

function QueryPlaceholder(props) {
  let classes = props.hide ? 'query-placeholder hide' : 'query-placeholder';
  return <h2 className={classes}>Here are the results for {props.query}</h2>;
}

export default QueryPlaceholder;
