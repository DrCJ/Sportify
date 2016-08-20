import React from 'react';
import _ from 'lodash';
import WeeksCache from '../weekConstant.js';
import ScheduleNavigationWeekEntry from './scheduleNavigationWeekEntry.jsx';

const ScheduleNavigation = () => (
  <div className="schedule-week-banner">
    <div className="schedule-week-current"> Football Schedule Banner </div>
    <ul className="schedule-week-list">
      {
        _.map(WeeksCache, (week, i) => (
          <ScheduleNavigationWeekEntry weekKey={i} week={week} />
        ))
      }
    </ul>
  </div>
);

export default ScheduleNavigation;
