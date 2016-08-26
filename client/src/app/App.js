import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../footer/index.jsx';
import Header from '../header/index.jsx';
import NavigationCanvas from '../navCanvas/index.jsx';
import PlayerModal from '../playerModal/index.jsx';
import { closeNavigation, closeModal } from './actions';
import { getGamesSchedule } from '../schedule/actions';

class App extends Component {
  // Calling the getGamesSchedule once App mounts so that state will be updated by the time
  // User navigates to the page.
  render() {
    return (
      <div className="app-container">
        <NavigationCanvas />
        <div onClick={this.props.closeNavigation} className="shadow" />
        <div onClick={this.props.closeModal} className="shadow-modal" />
        <div className="main-content">
          <Header />
          <div className="mathead-bg"></div>
          <PlayerModal />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, { closeNavigation, closeModal, getGamesSchedule })(App);
