import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import App from './components/App';
import SearchResults from './components/SearchResults.js'
import VotesList from './components/VotesList';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/welcome" component={App} >
    <IndexRoute component={SearchResults}/>
      <Route path='/search' component={SearchResults}/>
      <Route path='/votes' component={VotesList}/>
    </Route>
  </Router>
)
