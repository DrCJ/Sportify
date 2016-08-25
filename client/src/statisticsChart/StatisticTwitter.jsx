import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatisticsTwitterList from './StatisticTwitterList.jsx';

class StatisticsTwitter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="statistics-twitter-container">
        <div className="statistics-twitter-player">
          <div> This will be player image </div>
        </div>
        <div className="statistics-twitter-tweets">
          <div className="statistics-twitter-title"> Twitter Title </div>
          <StatisticsTwitterList playerTweets={this.props.playerTweets} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerTweets: state.playerTweets,
  };
}


export default connect(mapStateToProps, null)(StatisticsTwitter);
