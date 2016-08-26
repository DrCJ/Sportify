import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PlayerViewTable } from './PlayerViewTable';
import { requestAllPlayers } from './actions';
import PlayerFilterForm from './PlayerFilterForm';

class PlayerView extends Component {
  componentDidMount() {
    this.props.requestAllPlayers();
  }
  render() {
    if (this.props.players.length === 0) {
      return <div> Loading (Image????) </div>
    }
    return (
      <div className="player-background-image">
        <div className="mathead-bg" />
        <div className="center-content">
          <div className="player-stats-container">
            <PlayerFilterForm />
            <PlayerViewTable />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
  };
}

export default connect(mapStateToProps, { requestAllPlayers })(PlayerView);
