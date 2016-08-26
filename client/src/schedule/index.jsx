import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScheduleNavigation from './components/scheduleNavigation.jsx';
import ScheduleGamesList from './components/scheduleGamesList.jsx';

class Schedule extends Component {
  render() {
    return (
      <div>
        <div className="schedule-bar" />
          <div className="center-content">
            <div className="hidetrick">
              <ScheduleNavigation />
            </div>
            <div className="schedule">
              <ScheduleGamesList />
            </div>
          </div>
      </div>
    );
  }
}

export default Schedule;
