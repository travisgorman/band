import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';
// import App from './components/App';
// import SearchResults from './components/SearchResults';
// import VotesList from './components/VotesList';
import router from './router';
import $ from 'jquery';
import settings from './settings';
import session from './models/session';
// const router =
//     (
//       <Router history={hashHistory}>
//         <Route path='/' component={App}>
//           <IndexRoute component={SearchResults}/>
//           <Route path='/search' component={SearchResults}/>
//           <Route path='/votes' component={VotesList}/>
//         </Route>
//       </Router>
//     );

$(document).ajaxSend(function( evt, xhr, jquerySettings ){

  if (!jquerySettings.url.includes('https://api.spotify.com/v1/')) {
    // if i'm logging in or siging up:
    xhr.setRequestHeader( 'Authorization', settings.basicAuth )
    // if i'm sending anythign else to kinvey, authenticate with the auth token
  } else {
    xhr.setRequestHeader('Kinvey', session.authtoken);
  }

});


ReactDOM.render(router, document.getElementById('page'));
