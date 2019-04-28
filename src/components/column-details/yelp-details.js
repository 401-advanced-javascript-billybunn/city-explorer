import React from 'react';

function YelpDetails(props) {
  return (
    <>
    <h3>Results from the Yelp API</h3>
      <ul className="yelp-results">
        {props.data.map((restaurant, idx) => {
          return (
            <li key={idx}>
              <a href={restaurant.url}>{restaurant.name}</a>
              <p>The average rating is {restaurant.rating} out of 5 and the average cost is {restaurant.price} out of 4</p>
              <img src={restaurant.image_url} alt={restaurant.name} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default YelpDetails;
