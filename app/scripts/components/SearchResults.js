import React from 'react';

export default React.createClass({

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
          />
        <div className="searchResults">
          search results go here..
        </div>
      </div>
    )
  }
});
