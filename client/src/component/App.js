import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../containers/Header';
import { Footer } from './Footer';
import { NavigationCanvas } from '../containers/NavigationCanvas';
import { closeNavigation } from '../actions/index';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavigationCanvas />
        <div onClick={this.props.closeNavigation} className="shadow" />
        <div className="main-content">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null, { closeNavigation })(App);
