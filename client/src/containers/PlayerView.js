import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import PlayerListView from './PlayerListView';
import { reduxForm } from 'redux-form';
import { requestAllPlayers, filterPlayers } from '../actions/index';

class PlayerView extends Component {
  componentWillMount() {
    this.props.requestAllPlayers().then((data) => {
      console.log(data, 'data');
      this.props.players.concat(data);
    });
  }

  onSubmit(props) {
    const reqObj = {
      Team: this.props.fields.team.value,
      Week: this.props.fields.weekly.value,
      Position: this.props.fields.position.value,
    };
    console.log(reqObj);
    this.props.filterPlayers(reqObj)
      .then((data) => {
        console.log(data);
        // this.props.players.concat()
      });
    // Post Get All Players
  }
  render() {
    const { fields: { team, position, weekly }, handleSubmit } = this.props;
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
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="filter-form-select">
              <label for="teamSelect"> TEAM </label>
              <select data="teamVal" id="teamSelect" {...team}>
                <option value="All">All</option>
                <option value="GB">GreenBay</option>
              </select>
            </div>
            <div className="filter-form-select">
              <label for="weekly"> WEEKLY </label>
                <select data="weeklyVal" id="weeklySelect" {...weekly}>
                  <option value="">2015-2016</option>
                  <option value="1">Week 1</option>
                  <option value="2">Week 2</option>
                  <option value="3">Week 3</option>
                  <option value="4">Week 4</option>
                  <option value="5">Week 5</option>
                  <option value="6">Week 6</option>
                  <option value="7">Week 7</option>
                  <option value="8">Week 8</option>
                  <option value="9">Week 9</option>
                  <option value="10">Week 10</option>
                  <option value="11">Week 11</option>
                  <option value="12">Week 12</option>
                  <option value="13">Week 13</option>
                  <option value="14">Week 14</option>
                  <option value="15">Week 15</option>
                  <option value="16">Week 16</option>
                  <option value="17">Week 17</option>
                </select>
            </div>
            <div className="filter-form-select">
              <label for="positionSelect"> POSITION </label>
                <select data="positionVal" id="positionSelect" {...position}>
                  <option value="All">All</option>
                  <option value="QB">QB</option>
                  <option value="RB">RB</option>
                  <option value="WR">WR</option>
                  <option value="TE">TE</option>
                  <option value="K">K</option>
                  <option value="Def">Def</option>
                </select>
            </div>
            <input
              type="submit"
              className="button filter-form-select-button"
              value="Submit"
            ></input>
          </form>
          <div className="player-table">
            <table>
              <thead>
                <tr>
                  <td>Offense</td>
                  <td>Position</td>
                  <td>GP*</td>
                  <td>Opp</td>
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
                  <td>RshTD</td>
                  <td>RecTD</td>
                  <td>2PT</td>
                  <td>Carlos </td>
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

export default reduxForm({
  form: 'PlayerView',
  fields: ['team', 'position', 'weekly'],
}, mapStateToProps, { requestAllPlayers, filterPlayers })(PlayerView);
