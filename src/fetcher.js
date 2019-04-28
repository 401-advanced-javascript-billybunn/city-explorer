// runs when "Explore" button is clicked

// require('dotenv').config;

// let __API_URL__ = "https://city-explorer-backend.herokuapp.com";
let __API_URL__ = 'https://obscure-bayou-17929.herokuapp.com';
let GOOGLE_MAPS_API_KEY = 'AIzaSyD7ec2NYqouYl7xDapeBorUXKXqYjJV_S8';

const getLocation = (searchQuery) => {
  // How to set params with fetch: https://fetch.spec.whatwg.org/#fetch-api
  let url = new URL(__API_URL__ + '/location'),
    params = { data: searchQuery };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return fetch(url).then(results => results.json())
    .catch(err => console.log('error in api handler', err));
};

const mapURL = (location) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${GOOGLE_MAPS_API_KEY}`;

  // return new Promise((resolve, reject) => {

  // resolve(map_url);

  // });

};

// .then(location =>)

// display the map and unhide everything else
// call all the other API's using promise.all
// process the results from each API
// send a pretty object back to App.js so it can update its state


function getResources(location) {
  // INPUT <-- location data object
  // OUTPUT --> data for each
}


export { getLocation, mapURL };

