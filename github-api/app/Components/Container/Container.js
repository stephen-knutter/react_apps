import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

import About from '../About/About';
import Home from '../Home/Home';
import Repos from '../Repos/Repos';

class App extends Component {
  render() {
      return (
        <div>
          <header>App</header>
          <menu>
            <ul>
              <li><Link href="/about" activeClassName="active">About</Link></li>
              <li><Link href="/repos" activeClassName="active">Repos</Link></li>
            </ul>
          </menu>
          {this.props.children}
        </div>
      )
  }
}

export default App;
