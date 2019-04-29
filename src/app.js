import React from 'react';

import Header from './components/header.js';
import URLForm from './components/url-form.js';
import SearchForm from './components/search-form.js';
import Map from './components/map.js';
import Error from './components/error.js';
import QueryPlaceholder from './components/query-placeholder.js';
import ColumnContainer from './components/column-container.js';
import { fetchLocation, mapURL, fetchResources } from './fetcher.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialView: true,
      errorMessage: null,
      query: null,
      map_url: 'https://via.placeholder.com/600x300',
      data: {}
    };
  }

  handleError = (errorMessage) => this.setState({ errorMessage });

  resetError = () => this.setState({errorMessage: null});

  newSearch = async (query) => {
    this.resetError();
    try {
      // Get lat, long, & formatted query from Google geocode API
      let location = await fetchLocation(query);

      // Update state for map and "here are the results for ____"
      this.setState({
        initialView: false,
        query: location.formatted_query,
        map_url: mapURL(location)
      });

      // Send all the requests out to the 3rd-party APIs
      let data = await fetchResources(location);

      // Update state with new data from 3rd-party APIs
      this.setState({ data });
    } catch (err) {
      this.handleError(err.message);
    }
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <URLForm />
          <SearchForm returnQuery={this.newSearch} />
          <Map hide={this.state.initialView} url={this.state.map_url} />
          <Error>{this.state.errorMessage}</Error>
          <QueryPlaceholder hide={this.state.initialView} query={this.state.query} />
          <ColumnContainer hide={this.state.initialView} data={this.state.data} />
        </main>
        <footer></footer>
      </>
    );
  };
}

export default App;
