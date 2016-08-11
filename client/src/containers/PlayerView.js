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
      return <div> Loading (Image????) </div>
    }
    return (
      <div>
        <h2> PlayerView </h2>
        <div className="center-content">
          <div className="search-container">
            <input type="text" name="name" value="" placeholder="SEARCH" />
          </div>
          <form>
            <div className="filter-form-select">
              <label for="teamSelect"> TEAM </label>
              <select data="team" id="teamSelect">
                <option value="All">All</option>
                <option value="GB">GreenBay</option>  
              </select>
            </div>
            <div className="filter-form-select">
            <label for="positionSelect"> POSITION </label>
              <select data="position" id="positionSelect">
                <option value="All">All</option>
                <option value="All">QB</option>
                <option value="All">RB</option>
                <option value="All">WR</option>
                <option value="All">K</option>
                <option value="All">Def</option>
              </select>
            </div>
            <div className="filter-form-select">
            <label for="weekly"> WEEKLY </label>
              <select data="weekly" id="weeklySelect">
                <option value="All">1(proj)</option>
                <option value="All">2(proj)</option>
                <option value="All">3(proj)</option>
                <option value="All">4(proj)</option>
                <option value="All">5(proj)</option>
                <option value="All">6(proj)</option>
                <option value="All">7(proj)</option>
                <option value="All">8(proj)</option>
                <option value="All">9(proj)</option>
                <option value="All">10(proj)</option>
                <option value="All">11(proj)</option>
                <option value="All">12(proj)</option>
                <option value="All">13(proj)</option>
                <option value="All">14(proj)</option>
                <option value="All">15(proj)</option>
                <option value="All">16(proj)</option>
                <option value="All">17(proj)</option>
              </select>
              </div>
              <input type="submit" className="button filter-form-select-button" value="Submit"></input>
          </form>
          <div className="player-table">
            <table>
              <thead>
                <tr>
                  <td>Offense</td>
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

