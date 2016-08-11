import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchLeagues } from '../actions/index';

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
        <Link to="/TeamView">TeamView</Link>
        {this.renderLeagues()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { leagues: state.leagues };
}

export default connect(mapStateToProps, { fetchLeagues })(LeagueOverview);
