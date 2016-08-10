import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PlayerListView from './PlayerListView';

import { requestAllPlayers } from '../actions/index';

class PlayerView extends Component {
  componentWillMount() {
    this.props.requestAllPlayers().then((data) => {
      this.props.players.concat(data);
    });
  }
  render() {
    if (this.props.players.length === 0) {
      return <div> Loading </div>
    }
    return (
      <div>
        <h2> PlayerView </h2>
        <div className="center-content">
          <div className="search-container">
            <input type="text" name="name" value="" placeholder="SEARCH" />
          </div>
          <div className="player-table">
            <table>
              <thead>
                <tr>
                  <td>Offense</td>
                  <td>Owner</td>
                  <td>GP*</td>
                  <td>% Owned</td>
                  <td>Proj</td>
                  <td>Actual</td>
                  <td>Yds</td>
                  <td>TD</td>
                  <td>Int</td>
                  <td>Att*</td>
                  <td>Yds</td>
                  <td>TD</td>
                  <td>Tgt*</td>
                  <td>Rec</td>
                  <td>TD</td>
                  <td>TD</td>
                  <td>2PT</td>
                  <td>Lost</td>
                </tr>
              </thead>
            <PlayerListView />
            </table>
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

