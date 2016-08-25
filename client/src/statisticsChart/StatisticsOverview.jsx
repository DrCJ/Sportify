import React, { Component } from 'react';
import axios from 'axios';

import DoubleBarChart from './DoubleBarChart.jsx';
import StatisticsTwitter from './StatisticTwitter.jsx';
import StatisticsComparePreview from './StatisticComparePreview.jsx';

class StatisticsOverview extends Component {
  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
    this.state = {
        QB: null,
        RB: {},
        WR: {},
        TE: {},
        done: null,
    }
  }
  componentDidMount() {
    const positions = {
      QB: this.getChartData('QB').then(data => { this.setState({ QB: data })}),
      RB: this.getChartData('RB').then(data => { this.setState({ RB: data })}),
      WR: this.getChartData('WR').then(data => { this.setState({ WR: data })}),
      TE: this.getChartData('TE').then(data => { this.setState({ TE: data, done: true })}),
    };
  }
  getChartData(position, year, limit) {
    const request = axios({
      method: 'post',
      url: '/api/getProjectedVsActual',
      data: {
        position,
        year,
        limit,
      },
      header: {
        'Content-Type': 'application/json',
      },
    });
    return request;
  }
  render() {
    if (this.state.done) {
      return (
        <div className="center-content">
          <h1>Statistics Overview</h1>
          <DoubleBarChart position={"QB"} positions={this.state.QB} />
          <DoubleBarChart position={"WR"} positions={this.state.WR} />
          <DoubleBarChart position={"RB"} positions={this.state.RB} />
          <DoubleBarChart position={"TE"} positions={this.state.TE} />
          <StatisticsTwitter />
          <StatisticsComparePreview positions={this.state.QB} />
        </div>
      );
    }
    return (
      <div> QB Will Mount </div>
    );
  }
}

export default StatisticsOverview;
