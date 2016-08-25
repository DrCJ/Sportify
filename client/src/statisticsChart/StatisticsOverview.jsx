import React from 'react';
import DoubleBarChart from './DoubleBarChart.jsx';
import StatisticsTwitter from './StatisticTwitter.jsx';
import StatisticsComparePreview from './StatisticComparePreview.jsx';

const StatisticsOverview = () => (
  <div className="center-content">
    <h1>Statistics Overview</h1>
    <DoubleBarChart position="QB" />
    <DoubleBarChart position="RB" />
    <DoubleBarChart position="WR" />
    <DoubleBarChart position="TE" />
    <StatisticsTwitter />
    <StatisticsComparePreview />
  </div>
);

export default StatisticsOverview;
