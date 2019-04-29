import React from 'react';

function MeetupDetails(props) {
  return (
    <>
      <h3>Results from the Meetup API</h3>
      <ul className="meetups-results">
        {props.data.map((meetup, idx) => {
          return (
            <li key={idx}>
              <a href={meetup.link}>{meetup.name}</a>
              <p>Hosted by: {meetup.host}</p>
              <p>Created on: {meetup.creation_date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MeetupDetails;
