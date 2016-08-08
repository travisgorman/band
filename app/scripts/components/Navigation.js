import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render: function(){
    return (
      <div>
        <nav>
          <Link to='/search'>Search</Link>
          <Link to='/votes'>Votes</Link>
        </nav>
      </div>
    )
  }
});
