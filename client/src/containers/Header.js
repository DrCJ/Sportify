import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">
          <img src="" alt="SOME RANDOM LOGO" />
        </div>
        <div className="login-btn">
        <Link to="/YahooProfile"> <div> Yahoo Profile Login </div> </Link>
        </div>
      </div>
    );
  }
}

mapStateToProps(state) {

}

export default Header;