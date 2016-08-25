import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScheduleGamesListEntry from './scheduleGamesListEntry.jsx';

class ScheduleGamesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="schedule-game-container">
        {this.props.games.map((game) => (
          <ScheduleGamesListEntry date={game.Date} awayTeam={game.AwayTeam} homeTeam={game.HomeTeam} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { games: state.games }
);



export default connect(mapStateToProps)(ScheduleGamesList);
