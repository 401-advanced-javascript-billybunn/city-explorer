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
      data: {
        weather: [
          {
            time: 'Saturday at 10PM',
            forecast: 'cloudy with a chance of meatballs'
          },
          {
            time: 'Sunday at 1PM',
            forecast: 'cloudy with a chance of meatballs'
          },
          {
            time: 'Monday at 1PM',
            forecast: 'cloudy with a chance of meatballs'
          }
        ],

        yelp: [
          {
            url: 'www.some-restaurant.com',
            name: 'Wild Ginger',
            rating: '4',
            price: '10.00',
            image_url: 'placehold.it/200'
          },
          {
            url: 'www.some-restaurant.com',
            name: 'Code FEllows Cafe',
            rating: '4',
            price: '10.00',
            image_url: 'placehold.it/200'
          }
        ]
      }
    };
  }

  renderColumns() {
    Object.keys(this.state.data).map((type, idx) => {
      console.log(type, this.state.data[type]);
      return (
        <Column key={idx} type={type} data={this.state.data[type]} />
      );

    });
  }

  render() {
    // this.renderColumns(this.state.data);
    return (
      <>
        <Header />
        <main>
          <SearchForm />
          <Map />
          <Error />
          <h2 className="query-placeholder">Here are the results for {this.state.query}</h2>
          <div className="column-container hide">
            {Object.keys(this.state.data).map((type, idx) => {
              console.log(type, this.state.data[type]);
              return (
                <Column key={idx} type={type} data={this.state.data[type]} />
              );

            })}
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
