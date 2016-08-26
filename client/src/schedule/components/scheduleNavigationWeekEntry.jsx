import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGamesSchedule } from '../actions';

class ScheduleNavigationWeekEntry extends Component {
  constructor(props) {
    super(props);
    this.handleWeekButtonClick = this.handleWeekButtonClick.bind(this);
  }
  componentDidMount() {
    this.props.getGamesSchedule({ week: 1});
  }

  handleWeekButtonClick(e) {
    const dataObj = { week: e.target.value };
    this.props.getGamesSchedule(dataObj);
  }
  render() {
    return (
      <li>
        <button onClick={this.handleWeekButtonClick} value={this.props.weekKey}>
        {this.props.week}
        </button>
      </li>
    );
  }
}

const mapStateToProps = (state) => (
  { games: state.games }
);

ScheduleNavigationWeekEntry.propTypes = {
  games: React.PropTypes.array,
  week: React.PropTypes.string,
  weekKey: React.PropTypes.number,
  getGamesSchedule: React.PropTypes.func,
};

export default connect(mapStateToProps, { getGamesSchedule })(ScheduleNavigationWeekEntry);
