import React from 'react';

export default React.createClass({
  submitVote: function () {

  },
  render: function(){
    return (
      <div className="band">
        <img src={this.props.img} />
        <div className="bandName">{this.props.bandName}</div>
        <input
          type="button"
          value="vote"
          // onClick={submitVote}
          />
      </div>
    )
  }
});
