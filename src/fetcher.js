import superagent from 'superagent';

// City Explorer back-end
let __API_URL__ = 'https://city-explorer-backend.herokuapp.com';
// let __API_URL__ = 'https://obscure-bayou-17929.herokuapp.com';

// Restricted API key for Google geolocation services
let GOOGLE_MAPS_API_KEY = 'AIzaSyD7ec2NYqouYl7xDapeBorUXKXqYjJV_S8';

// Endpoints to City Explorer back-end
// IMPORTANT: the file names in 'src/components/column-details' must match these
// e.g., "weather-details.js", "yelp-details.js", etc.
const resources = ['weather', 'yelp', 'meetups', 'movies', 'trails'];

// Sends a GET request to the City Explorer back-end
// Returns a location object with a formatted_query, latitude, & longitude
const fetchLocation = async (searchQuery) => {
  let url = `${__API_URL__}/location?${searchQuery}`;
  let results = await superagent(url).query({ data: searchQuery });
  return results.body;
};

// Constructs a src URL for the Google map img with a given lat & long
const mapURL = (location) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${GOOGLE_MAPS_API_KEY}`;
};

// Sends GET requests to City Explorer back-end
// Returns a formatted object of results from 3rd-pary API resouces
const fetchResources = async (location) => {
  // Create an array of GET requests for all resources
  let urls = resources.map(resource => `${__API_URL__}/${resource}`);
  let dataRequests = urls.map(url => {
    return superagent.get(url).query({ data: location });
  });

  // Sends all requests at simultaneously, returns an array of results in-order
  let results = await Promise.all(dataRequests);

  // Formats results into object with a name & respective response.body for each resource
  let data = results.reduce((acc, result, idx) => {
    acc[resources[idx]] = result.body;
    return acc;
  }, {});

  return data;
};

export { fetchLocation, mapURL, fetchResources };
