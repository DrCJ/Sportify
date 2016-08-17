import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { PlayerViewTable } from './PlayerViewTable';
import { requestAllPlayers } from '../actions/index';
import PlayerFilterForm from './PlayerFilterForm';

class PlayerView extends Component {
  componentWillMount() {
    this.props.requestAllPlayers().then((data) => {
      this.props.players.concat(data);
    });
  }
  render() {
    if (this.props.players.length === 0) {
      return <div> Loading (Image????) </div>
    }
    return (
      <div className="player-background-image">
        <h2>   </h2>
        <div className="center-content">
          <div className="search-container">
            <input type="text" name="name" value="" placeholder="SEARCH" />
          </div>
          <PlayerFilterForm />
          <PlayerViewTable />
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
