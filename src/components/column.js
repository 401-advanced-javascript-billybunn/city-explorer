import React, { Suspense } from 'react';

// import Details from './column-details/weather-details.js';
const Details = React.lazy(() => import('./column-details/weather-details.js'));


function Column(props) {
  console.log(props.data);
  return (
    <section>
      <h3>{props.children}</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Details data={props.data} />
      </Suspense>
    </section>
  );
}

export default Column;
