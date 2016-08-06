import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import SearchResults from './components/SearchResults';
import VotesList from './components/VotesList';

const router =
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SearchResults}/>
          {/* <Route path='/search' component={SearchResults}/> */}
          <Route path='/votes' component={VotesList}/>
        </Route>
      </Router>
    );

ReactDOM.render(router, document.getElementById('page'));
