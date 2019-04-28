import React from 'react';

import Header from './components/header.js';
import URLForm from './components/url-form.js';
import SearchForm from './components/search-form.js';
import Map from './components/map.js';
import Error from './components/error.js';
import Column from './components/column.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      before: false,
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
    this.columnClasses = `column-container ${this.state.before ? 'hide' : ''}`;
    this.queryPlaceholderClasses = `query-placeholder ${this.state.before ? 'hide' : ''}`;
    this.renderColumns = () => {
      Object.keys(this.state.data).map((type, idx) => <Column key={idx} type={type} data={this.state.data[type]} />);
    };
  }

  handleSubmit = (query) => {
    this.setState({query});
  }



  render() {
    // this.renderColumns(this.state.data);
    return (
      <>
        <Header />
        <main>
          <URLForm />
          <SearchForm handleQuery={this.handleSubmit} />
          <Map hide={this.state.before} />
          <Error />
          <h2 className={this.queryPlaceholderClasses}>Here are the results for {this.state.query}</h2>
          <div className={this.columnClasses}>
            {Object.keys(this.state.data).map((type, idx) => <Column key={idx} type={type} data={this.state.data[type]} />)}
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
