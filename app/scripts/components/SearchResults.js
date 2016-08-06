import React from 'react';
import $ from 'jquery';

export default React.createClass({
  submitSearch: function () {
    let searchQuery = this.refs.search.value;
    $.ajax({
      url: `https://api.spotify.com/v1/search`,
      data: {q: searchQuery, type: 'artist'},
      success: function (data) {
        let results = data.artists.items;
        console.log(results);
      }
    })
  },
  componentDidMount: function(){

  },
  render: function () {
    return (
      <div>
        <input
          type="text"
          placeholder="search for artist..."
          ref="search"
          />
        <input
          type="button"
          value="submit"
          onClick={this.submitSearch}
          />
        <div className="searchResults">
          search results go here..
        </div>
      </div>
    )
  }
});
