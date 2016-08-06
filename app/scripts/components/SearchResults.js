import React from 'react';
import $ from 'jquery';
import Band from './Band';


export default React.createClass({
  getInitialState: function () {
    return {
        results: []
    }
  },
  submitSearch: function () {
    let searchQuery = this.refs.search.value;

    $.ajax({
      url: `https://api.spotify.com/v1/search`,
      data: {q: searchQuery, type: 'artist'},
      success: (data) => {
        let results = data.artists.items;
        this.setState({
          results: results
        });
      }
    });
  },
  render: function () {
    let mySearchResults = this.state.results.map( (result, i) => {
      if (result.images.length === 0) {
        result.images.push({ url:'https://s8.postimg.org/a8vgc0k5x/no_Image.png'
        });
      }
      return (
          <Band
            key={i}
            img={result.images[0].url}
            bandName={result.name}
           />
       )
    });
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
        {mySearchResults}
        </div>
      </div>
    )
  }
});
