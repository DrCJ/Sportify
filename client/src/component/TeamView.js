import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import YahooProfileImage from '../containers/YahooProfileImage';

import { fetchRoster } from '../actions/index';

class TeamView extends Component {
  componentWillMount() {
    this.props.fetchRoster(this.props.params.league_key);
  }

  renderRoster() {
    return this.props.yahooProfile.players.map((player, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>
              <Link to={`posts/${index}`}>
                <span>{player.name.first} {player.name.last}</span>
              </Link>
            </td>
            <td>22</td>
            <td>33</td>
            <td>44</td>
            <td>55</td>
            <td>66</td>
            <td>77</td>
            <td>554</td>
            <td>5666</td>
            <td>3333</td>
            <td>545</td>
            <td>5454</td>
            <td>3</td>
            <td>5</td>
            <td>23</td>
            <td>55</td>
            <td>67</td>
            <td>4232</td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    return (
      <div className="center-content">
        <YahooProfileImage />
        <div>general info</div>
          <div className="none">
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
              {this.renderRoster()}
            </table>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { yahooProfile: state.yahooProfile };
}

export default connect(mapStateToProps, { fetchRoster })(TeamView);
