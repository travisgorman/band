import React from 'react';

export default React.createClass({
  submitVote: function () {
    console.log(this.props);
    this.props.handleVote(this.props.bandName, this.props.img)
  },
  render: function(){
    return (
      <div className="band">
        <img src={this.props.img} />
        <div className="bandName">{this.props.bandName}</div>
        <input
          type="button"
          value="vote"
          onClick={this.submitVote}
          />
      </div>
    )
  }
});
