import React, { Component } from 'react';
import { Link } from 'react-router';

import Foundation from 'react-foundation';
import { Footer } from './Footer';
import Header from '../containers/Header';
import { NavigationCanvas } from '../containers/NavigationCanvas';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavigationCanvas />
        <div className="shadow" />
        <div className="main-content">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
