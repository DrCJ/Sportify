import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { toggleNavigation } from '../actions/index';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button onClick={this.props.toggleNavigation} type="button" className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">
          <img src="" alt="SOME RANDOM LOGO" />
        </div>
        <div className="login-btn">
          <a href="/auth/yahoo">Yahoo Profile Login</a>
          <span> | </span>
          <a href="/logout">Logout</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { header: state.header };
}

export default connect(mapStateToProps, { toggleNavigation })(Header);
