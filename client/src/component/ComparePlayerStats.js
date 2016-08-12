import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../actions/index';

class ComparePlayerStats extends Component {
  componentWillMount() {
    this.props.fetchSpecificPlayers()
  }

  renderStats() {
    //player1{}
    return statIndex.map((stat, index) => {
      return (
        <tr>
          <td>{lookup[stat]}</td>
          <td>{player1[stat]}</td>
          <td>80</td>
        </tr>
      );
    });
  }

  // renderPlayers() {
  //   return this.state.yahooProfile.stats.map((i){
  //
  //   })
  // }

  render() {
    return (
      <div>
        <h1>STATS TABLE GOES HERE</h1>
        <table>
          <thead>
            <tr>
              <td>Stats</td>
              <td>Current Player</td>
              <td>Opposing Player</td>
            </tr>
          </thead>
          <tbody>
            {this.renderStats()}
          </tbody>
        </table>
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps, { fetchSpecificPlayers })(ComparePlayerStats);

const statIndex = ['Offense', 'Position', 'GP*', 'Opp', 'Proj', 'Actual', 'Yds',
                  'TD', 'Int', 'Att*', 'Yds', 'TD', 'Tgt*', 'Rec', 'RshTD', 'RecTD', '2PT', 'Carlos'];
