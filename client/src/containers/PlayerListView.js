import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerEntryView from '../component/PlayerEntryView';

export class PlayerListView extends Component {
  render() {
    return (
      <tbody>
      {this.props.players.map((player) => <PlayerEntryView key={player.id} player={player} />)}
      </tbody>
		);
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
  };
}

export default connect(mapStateToProps)(PlayerListView);
