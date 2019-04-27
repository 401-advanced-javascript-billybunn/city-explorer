import React from 'react';

function SearchForm() {
  return (
    <form id="search-form">
      <label htmlFor="search">Search for a location</label>
      <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
      <button type="submit">Explore!</button>
    </form>
  )
}

export default SearchForm;
