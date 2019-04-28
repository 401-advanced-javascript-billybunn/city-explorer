// runs when "Explore" button is clicked


// let __API_URL__ = "https://city-explorer-backend.herokuapp.com";
let __API_URL__ = 'https://obscure-bayou-17929.herokuapp.com';

function fetchData(searchQuery) {
  // How to set params with fetch: https://fetch.spec.whatwg.org/#fetch-api
  let url = new URL(__API_URL__ + '/location'),
    params = { data: searchQuery };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  fetch(url)
    .then(results => results.json())
    .then(result => console.log(result))
    // .then(location => {
    //   displayMap(location);
    //   return getResources(location);
    // })
    // .then(location =>)

    // display the map and unhide everything else
    // call all the other API's using promise.all
    // process the results from each API
    // send a pretty object back to App.js so it can update its state
    



    .catch(err => console.log('error in api handler', err));
}

function displayMap(location) {
  // Tells the App to unhide the map, query placeholder, sections and divs
  // pass the map url to the map component
  
}

function getResources(location) {
  // INPUT <-- location data object
  // OUTPUT --> data for each
}


export default fetchData;

