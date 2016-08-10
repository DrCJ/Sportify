import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { toggleNavigation } from '../actions/index';

class Header extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.toggleNavigation);
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
        <Link to="/YahooProfile"> <div> Yahoo Profile Login </div> </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { header: state.header };
}

export default connect(mapStateToProps, { toggleNavigation })(Header);