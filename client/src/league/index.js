import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchLeagues } from './actions';

class LeagueOverview extends Component {
  componentWillMount() {
    this.props.fetchLeagues();
  }

  renderLeagues() {
    return this.props.leagues.map((league, index) => {
      return (
        <h1 key={index}><Link to={`/TeamView/${league.league_key}`}>{league.name}</Link></h1>
      );
    });
  }

  render() {
    return (
      <div className="center-content">
        <h1>League Overview</h1>
        {this.renderLeagues()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { leagues: state.leagues };
}

export default connect(mapStateToProps, { fetchLeagues })(LeagueOverview);
