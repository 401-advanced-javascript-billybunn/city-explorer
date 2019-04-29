![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: http://xyz.com
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/city-explorer/
<!-- back-end -->
[3]: https://city-explorer-backend.herokuapp.com/
<!-- https://obscure-bayou-17929.herokuapp.com/ -->
<!-- front-end -->
[4]: https://city-explorer.netlify.com/
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

[![Build Status](https://travis-ci.com/401-advanced-javascript-billybunn/city-explorer.svg?branch=working)](https://travis-ci.com/401-advanced-javascript-billybunn/city-explorer)

## City Explorer

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
* [back-end][3]
* [front-end][4]

<!-- #### Documentation -->
<!-- * [Styleguidist]() -->

### Modules
```
src/
├── app.js
├── components/
│   ├── column-container.js
│   ├── column-details/
│   │   ├── meetups-details.js
│   │   ├── movies-details.js
│   │   ├── trails-details.js
│   │   ├── weather-details.js
│   │   └── yelp-details.js
│   ├── column.js
│   ├── error.js
│   ├── header.js
│   ├── map.js
│   ├── query-placeholder.js
│   ├── search-form.js
│   └── url-form.js
├── fetcher.js
└── index.js
```
#### `index.js`
Entry point for the React application. Requires React DOM to render the `App` component into the `#root` `<div>`.

#### `app.js`
React class component. Manages state of application and renders imported components. Passes down applicable state to some components. Passes down `error` state as `props.children` to the `Error` component. Imports functions from `fetcher.js` module.

#### `fetcher.js`
Module that exports several functions:
*  `fetchLocation(searchQuery)` - Sends a `GET` request to the back-end server, returns an object with location data.
* `mapURL(location)` - Creates a map URL string with the latitude and longitude attached to the given `location` object.
* `fetchResources` - Creates an array of `GET` requests to the back-end server—one for each 3rd-party resouce. Makes all requests simultaneously with `Promise.all` then processes the returned array of results into a formatted `data` object, which is returned.


### Setup
* `npm i`
  - installs app dependencies
* `GOOGLE_MAPS_API_KEY` 
  - unique API key for Google's geolocation service
* `__API_URL__`
  - URL to the running back-end City Explorer server


#### Running the app
* [See `create-react-app` docs](https://facebook.github.io/create-react-app/docs/getting-started)
* `npm run start`
  - runs the app in development mode; open http://localhost:3000 to view it in the browser
* `npm run build`
  - builds the app in a `build/` folder
  
<!-- #### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made? -->

### Build Process
As I visualized this project, I made a few rough diagrams to plan my approach.

I first created a DOM tree based on the existing City Explorer site. Because I wasn't allowed to touch the existing CSS, I knew I needed the markup rendered by my React app to be near identical. This helped me map out the exact HTML elements I needed to render.
![DOM tree](https://i.imgur.com/wjf61va.jpg)


Next, I sketched out a rough diagram of the React components I would build and how I'd manage state. I wanted practice managing state externally (at the `App.js` level) and have only functional/stateless components. I noticed that each "column" of 3rd-party API data was a `<section>` that contained an `<h3>` for a title and a unique `<div>` containing the actual data. To keep things clean in my `App.js`, I wanted to dynamically render the unique `<div>` for each of the 5 columns. To do this, I ended up using "[code-splitting](https://reactjs.org/docs/code-splitting.html)" with dynamic `import()` syntax; this involved using `React.lazy` and `Suspense` in my `column.js` component.

I also wanted to keep all the back-end server fetching in a separate module.
![React components](https://i.imgur.com/gEAy8tt.jpg)


Finally, I drew a diagram showing the process of a new search query. 
![Interaction flow](https://i.imgur.com/QmDAiu3.jpg)
* It all starts  the user clicks the "Explore" button, submitting the main `<form>`. 
* The [`search-form.js`](https://github.com/401-advanced-javascript-billybunn/city-explorer/blob/working/src/components/search-form.js) (which renders the form) handles the submit event and sends the query string back to `app.js`.
* `app.js` fires its `newSearch` method, which resets the error message in state and kicks off the entire API fetching process. This work takes place bit-by-bit, using functions imported from [`fetcher.js`](https://github.com/401-advanced-javascript-billybunn/city-explorer/blob/working/src/fetcher.js).
  * `fetchLocation()` makes a request to the back-end server, and returns the result: an object with a formatted query and location data.
  * `app.js` updates state to unhide the `Map` and [`PlaceholderQuery`](https://github.com/401-advanced-javascript-billybunn/city-explorer/blob/working/src/components/query-placeholder.js) and feed a `src` URL to the [`Map`](https://github.com/401-advanced-javascript-billybunn/city-explorer/blob/working/src/components/map.js) `<img>`.
  * `fetchResouces()` is called to create an array of requests for the 5 resources and `Promise.all` is used to make these requests simultaneously to the back-end server. It returns a nicely formatted object of data.
  * `app.js` updates state with the data received.
  * `app.js` renders any errors by passing them through the `Error` module as `props.children`.
* When `app.js` updates state with the results, the [`ColumnContainer`](https://github.com/401-advanced-javascript-billybunn/city-explorer/blob/working/src/components/column-container.js) module [renders multiple](https://reactjs.org/docs/lists-and-keys.html) `Column` components, one for each resource.
* Each [`Column`](https://github.com/401-advanced-javascript-billybunn/city-explorer/blob/working/src/components/column.js) component dynamically imports its `column-details/` file and displays those details as `props.children`.
* Each [`Details`](https://github.com/401-advanced-javascript-billybunn/city-explorer/tree/working/src/components/column-details) component parses and renders the data passed down to it by `Column`.
