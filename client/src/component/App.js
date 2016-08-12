import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Footer } from './Footer';
import Header from '../containers/Header';
import { NavigationCanvas } from '../containers/NavigationCanvas';
import PlayerModal from '../containers/PlayerModal';
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, { closeNavigation })(App);

// <PlayerModal />
