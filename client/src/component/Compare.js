import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../actions/index';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';

class Compare extends Component {
  componentWillMount() {
    this.props.fetchSpecificPlayers({ playerId: ['Aaron'] });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='center-content'>
        <h1>Compare Players</h1>
        <div className="search-container">
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" name="name" placeholder="SEARCH" />
            <input type="text" name="name" placeholder="SEARCH" />
            <input type="submit" />
          </form>
        </div>
        <ComparePlayerHeadshots />
        <ComparePlayerStats />
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps, { fetchSpecificPlayers })(Compare);
