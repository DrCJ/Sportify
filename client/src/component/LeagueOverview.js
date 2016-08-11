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
      console.log('league?------>', league);
      return (
        <h1 key={index}><Link to='/TeamView'>{league.name}</Link></h1>
      );
    });
  }

  render() {
    return (
      <div>
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
