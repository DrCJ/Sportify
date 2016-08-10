import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import YahooProfileImage from './YahooProfileImage';

import { fetchRoster } from '../actions/index';

class YahooTeams extends Component {
  componentWillMount() {
    console.log('yahooProfile');
    this.props.fetchRoster();
  }

  renderRoster() {
    return this.props.tempTableData.map((player, index) => {
      return (
        <li key={index}>
          <Link to={`posts/${index}`}>
            <span>{player.name.first} {player.name.last}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <a href="/auth/yahoo"> Login </a>
        <a href="/logout">Logout</a>
        <YahooProfileImage />
        <ul>
          {this.renderRoster()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tempTableData: state.yahooProfile };
}

export default connect(mapStateToProps, { fetchRoster })(YahooTeams);
