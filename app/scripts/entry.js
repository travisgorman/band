import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import router from './router';
import settings from './settings';
import store from './store';

  $(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {

    if (!jqueryAjax.url.includes( 'https://api.spotify.com/v1' )){
      console.log('not requesting spotify');
console.log(store);
      if ( store.session.get( 'authtoken' )) {
        console.log(store.session.get('authtoken'));
        // xhrAjax.setRequestHeader( 'Authorization', settings.basicAuth );
        xhrAjax.setRequestHeader( 'Authorization', 'Kinvey ' + store.session.get('authtoken') );
      }
      else {
        console.log('no authtoken found');
        // xhrAjax.setRequestHeader( 'Authorization', 'Kinvey ' + store.session.get('authtoken') );
        xhrAjax.setRequestHeader( 'Authorization', settings.basicAuth );
      }
    }
  });

ReactDOM.render( router, document.getElementById('page') );
