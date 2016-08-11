import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchRoster } from '../actions/index';

class LeagueOverview extends Component {
  componentWillMount() {
    this.props.fetchRoster();
  }

  renderRoster() {
    return this.props.tempTableData.map((player, index) => {
      return (
        <h1>league-info</h1>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/TeamView">TeamView</Link>
        {this.renderRoster()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tempTableData: state.yahooProfile };
}

export default connect(mapStateToProps, { fetchRoster })(LeagueOverview);
