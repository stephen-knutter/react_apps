import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './app/routes';

let handleCreateElement = (Component, props) => {
  if (Component.hasOwnProperty('requestInitialData')) {
    var initialData = document.getElementById('initial-data').textContent;
    if (initialData.replace(/\s+/g, '').length > 0) {
      initialData = JSON.parse(initialData);
    } else {
      initialData = [];
    }
    return <Component initialData={initialData} {...props} />;
  } else {
    return <Component {...props} />;
  }
}

render(
  <Router history={browserHistory} createElement={handleCreateElement}>
    {routes}
  </Router>, document.getElementById('root')
);
