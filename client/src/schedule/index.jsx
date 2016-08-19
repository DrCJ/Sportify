import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScheduleNavigation from './components/scheduleNavigation.jsx';
import ScheduleGamesList from './components/scheduleGamesList.jsx';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <ScheduleNavigation />
        <ScheduleGamesList />
      </div>
    );
  }
}

export default Schedule;
