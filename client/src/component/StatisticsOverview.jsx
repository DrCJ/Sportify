import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import DoubleBarChart from './DoubleBarChart.jsx';

const StatisticsOverview = () => (
  <div className="center-content">
    <h1>Statistics Overview</h1>
    <DoubleBarChart />
  </div>
);

// function mapStateToProps(state) {
//   return { leagues: state.leagues };
// }

export default StatisticsOverview;
// export default connect(mapStateToProps, { fetchLeagues })(StatisticsOverview);
