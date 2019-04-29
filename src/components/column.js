import React, { Suspense } from 'react';
// https://reactjs.org/docs/code-splitting.html

function Column(props) {
  const type = props.type;
  const Details = React.lazy(() => import(`./column-details/${type}-details.js`));

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <Details data={props.data} />
      </Suspense>
    </section>
  );
}

export default Column;
