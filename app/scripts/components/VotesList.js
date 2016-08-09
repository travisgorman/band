import React from 'react';
import Backbone from 'backbone';
import store from '../store';
import Band from './Band';

export default React.createClass({
getInitialState: function(){
  return (
    {
      results: []
    }
  )
},
updateState: function() {
  this.setState({
    results: store.votesCollection.toJSON()
  });
},
componentDidMount: function(){

  store.votesCollection.fetch()
  // console.log(store.votesCollection);
  store.votesCollection.on( 'change update', this.updateState );
  // console.log(store.votesCollection);
},
componentWillUnmount: function(){
  store.votesCollection.off( 'change update', this.updateState );
},
render: function(){

  let votedBands = this.state.results.map( (result, i) => {
    return (
            <Band
              key={i}
              img={result.img}
              bandName={result.name}
              votes={result.votes}
            />
          )
  });
    return (
            <div className="votedBands">
            <h2>All your favorite bands</h2>
              {votedBands}
            </div>
        )
    }
});
