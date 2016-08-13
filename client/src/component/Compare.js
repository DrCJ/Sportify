import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../actions/index';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';

class Compare extends Component {
  componentWillMount() {
    this.props.fetchSpecificPlayers({ playerId: [7200, 24788] });
  }

  render() {
    return (
      <div className='center-content'>
        <h1>Compare Players</h1>
        <div className="search-container">
          <input type="text" name="name" value="" placeholder="SEARCH" />
          <input type="text" name="name" value="" placeholder="SEARCH" />
        </div>
        <ComparePlayerHeadshots players={this.props.players}/>
        <ComparePlayerStats players={this.props.players}/>
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps, { fetchSpecificPlayers })(Compare);
