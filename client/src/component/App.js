import React, { Component } from 'react';
import { Link } from 'react-router';

import { Footer } from './Footer';
import { Header } from './Header';
import { NavigationCanvas } from '../containers/NavigationCanvas';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <h3> Footer </h3>
        <Footer />
        <NavigationCanvas />
      </div>
    );
  }
}

export default App;
