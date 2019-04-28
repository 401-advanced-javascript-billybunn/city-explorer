import React from 'react';

function SearchForm(props) {
  const handleNewSearch = (e) => {
    e.preventDefault();
    props.returnQuery(e.target[0].value);
  };

  return (
    <form id="search-form" onSubmit={handleNewSearch}>
      <label htmlFor="search">Search for a location</label>
      <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
      <button type="submit">Explore!</button>
    </form>
  );
}

export default SearchForm;
