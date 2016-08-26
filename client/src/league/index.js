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
        <div className="league">
          <h1 key={index}><Link to={`/TeamView/${league.league_key}`}>{league.name}</Link></h1>
          <p><a href={league.url}>Yahoo link</a></p>
          <p><b>Season:</b> {league.season}</p>
          <p><b>Current Week:</b> {league.current_week}</p>
          <p><b>Number of Teams:</b> {league.num_teams}</p>
        </div>
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
