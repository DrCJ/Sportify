import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatisticsTwitterList from './StatisticTwitterList.jsx';

class StatisticsTwitter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.playerTweets.data) {
      return (
        <div className="statistics-twitter-container">
          <div className="statistics-twitter-player">
            <h1 className="statistics-twitter-headline">{`Don't miss out what's going with ${this.props.playerTweets.data[0].user.name}`}</h1>
          </div>
          <div className="statistics-twitter-tweets">
            <StatisticsTwitterList playerTweets={this.props.playerTweets} />
          </div>
        </div>
      );
    }
    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playerTweets: state.playerTweets,
  };
}


export default connect(mapStateToProps, null)(StatisticsTwitter);
