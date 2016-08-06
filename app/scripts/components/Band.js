import React from 'react';

export default React.createClass({
  submitVote: function () {

  }
  render: function(){
    return (
      <div className="band">
        <img src='http://www.fillmurray.com/120/120' />
        <div className="bandName">Band Name!!</div>
        <input
          type="button"
          value="vote"
          // onClick={submitVote}
          />
      </div>
    )
  }
});
