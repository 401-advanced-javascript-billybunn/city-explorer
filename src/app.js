import React from 'react';

import Header from './components/header.js';
import SearchForm from './components/search-form.js';
import Map from './components/map.js';
import Error from './components/error.js';
import Column from './components/column.js';
// import WeatherDetails from './components/column-details/weather-details.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'Seattle, WA, USA',
      weather: {time: 'some data', forecast: 'cloudy with a chance of meatballs'}
    }
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <SearchForm />
          <Map />
          <Error />
          <h2 className="query-placeholder">Here are the results for {this.state.query}</h2>
          <div className="column-container hide">
            <Column data={this.state.weather}>Results from the Dark Sky API</Column>
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
