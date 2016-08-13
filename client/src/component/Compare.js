import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../actions/index';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';

class Compare extends Component {
  componentWillMount() {
    this.props.fetchSpecificPlayers({ playerId: [7200, 24788] });
  }

  onSubmit(event) {
    event.preventDefault();
    const reqObj = {
      playerOne: event.target[0].value
    };
    this.props.fetchSpecificPlayers(reqObj);
  }

  render() {
    return (
      <div className='center-content'>
        <h1>Compare Players</h1>
        <div className="search-container">
          <form onSubmit={this.onSubmit}>
            <input type="text" name="name" placeholder="SEARCH" />
            <input type="text" name="name" placeholder="SEARCH" />
            <input type="submit" />
          </form>
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
