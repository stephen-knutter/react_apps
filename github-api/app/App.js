import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import App from './Components/Container/Container';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Repos from './Components/Repos/Repos';
import RepoDetails from './Components/RepoDetails/RepoDetails';
import ServerError from './Components/ServerError/ServerError';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} title="About Us" />
      <Route path="repos" component={Repos}>
        <Route path="/repo/:repo_name" component={RepoDetails} />
      </Route>
      <Route path="error" component={ServerError} />
    </Route>
  </Router>
), document.getElementById('root'));
