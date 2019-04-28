import React from 'react';

import Header from './components/header.js';
import URLForm from './components/url-form.js';
import SearchForm from './components/search-form.js';
import Map from './components/map.js';
import Error from './components/error.js';
import QueryPlaceholder from './components/query-placeholder.js';
import ColumnContainer from './components/column-container.js';
import { getLocation, mapURL } from './fetcher.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialView: true,
      query: 'Seattle, WA, USA',
      map_url: 'https://via.placeholder.com/600x300',
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
            image_url: 'https://via.placeholder.com/150'
          },
          {
            url: 'www.some-restaurant.com',
            name: 'Code FEllows Cafe',
            rating: '4',
            price: '10.00',
            image_url: 'https://via.placeholder.com/150'
          }
        ],
        meetup: [{
          link: 'www.google.com',
          name: 'Partner power hour at cf',
          host: 'Code Fellows is hosting',
          creation_date: 'mar 6, 1993'
        },
        {
          link: 'www.google.com',
          name: 'community hackathon',
          host: 'Code Fellows is hosting',
          creation_date: '4/5/2998'
        }],
        movie: [{
          title: 'The Avengers',
          released_on: 'April 26, 2019',
          total_votes: '10,000,000',
          average_votes: '9',
          popularity: '99%',
          image_url: 'https://via.placeholder.com/250',
          overview: 'This was a great movie. Go see it! This is a very short overview of the movie.'
        },
        {
          title: 'The Code Fellows Movie',
          released_on: 'April 26, 2019',
          total_votes: '10,000,000',
          average_votes: '9',
          popularity: '99%',
          image_url: 'https://via.placeholder.com/250',
          overview: 'This was a great movie. Go see it! This is a very short overview of the movie.'
        }],
        trail: [
          {
            trail_url: 'www.trail.com',
            name: 'Poopoo Point',
            location: 'Seattle WA area',
            length: '800 miles',
            condition_date: 'April 25, 2019',
            condition_time: '1PM',
            conditions: 'Cold and rainy',
            stars: '8000',
            start_votes: '10,000',
            summary: 'This is a great hike. But its all up-hill, BOTH ways. How is that even possible?!'
          },
          {
            trail_url: 'www.trail.com',
            name: 'Mount Si',
            location: 'Seattle WA area',
            length: '800 miles',
            condition_date: 'April 25, 2019',
            condition_time: '1PM',
            conditions: 'Cold and rainy',
            stars: '8000',
            start_votes: '10,000',
            summary: 'This is a great hike. But its all up-hill, BOTH ways. How is that even possible?!'
          }
        ]
      }
    };
  }

  // renderColumns = () => {
  //   Object.keys(this.state.data).map((type, idx) => <Column key={idx} type={type} data={this.state.data[type]} />);
  // };

  handleSubmit = async (query) => {
    // get lat, long, & formatted query from Google geocode API
    let location = await getLocation(query);
    console.log('location in app.js', location);

    // Update the "here are the results for __" and map in the DOM
    this.setState({
      initialView: false,
      query: location.formatted_query,
      map_url: mapURL(location)
    });

    console.log(this.state);


    // this.setState({map_url: mapURL(location)});

    // .then(data => this.setState({data}))
    // .catch(err => console.err('ERROR in fetchCityData'))
  }


  render() {
    // this.renderColumns(this.state.data);
    return (
      <>
        <Header />
        <main>
          <URLForm />
          <SearchForm handleQuery={this.handleSubmit} />
          <Map hide={this.state.initialView} url={this.state.map_url} />
          <Error />
          <QueryPlaceholder hide={this.state.initialView} query={this.state.query} />
          <ColumnContainer hide={this.state.initialView} data={this.state.data} />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
