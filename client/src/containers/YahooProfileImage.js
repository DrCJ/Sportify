import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchRoster } from '../actions/index';

class YahooProfileImage extends Component {
  render() {
    return (
      <div>
        <a href="/auth/yahoo"> Login </a>
        <a href="/logout">Logout</a>
        <h1>Profile Image</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tempTableData: state.yahooProfile };
}

export default connect(mapStateToProps, { fetchRoster })(YahooProfileImage);
