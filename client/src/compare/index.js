import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from './actions';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';
import LineChart from '../graph/LineChart';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.fetchSpecificPlayers( { playerNames: ['Aaron Rodgers', 'Cam Newton'] });
  }
  onSubmit(event) {
    event.preventDefault();
    let playerOne = event.target[0].value;
    let playerTwo = event.target[1].value;
    if (event.target[0].value === '') {
      playerOne = this.props.players[0][0].Name;
    }
    if (event.target[1].value === '') {
      playerTwo = this.props.players[0][1].Name;
    }
    this.props.fetchSpecificPlayers({ playerNames: [playerOne, playerTwo] });
    event.target[0].value = '';
    event.target[1].value = '';
  }
  render() {
    return (
      <div className='center-content'>
        <h1>Compare Players</h1>
        <div className="search-container">
          <form onSubmit={this.onSubmit}>
            <input type="text" name="name" placeholder="SEARCH" className="player1-search"/>
            <input type="text" name="name" placeholder="SEARCH" className="player2-search"/>
            <noscript>
              <input type="submit" />
            </noscript>
          </form>
        </div>
        <ComparePlayerHeadshots />
        <ComparePlayerStats />
        <LineChart />
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.query };
}

export default connect(mapStateToProps, { fetchSpecificPlayers })(Compare);
