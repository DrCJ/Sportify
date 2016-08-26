import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

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

  handleClick(evt) {
    const value = evt.target.attributes[0].value;    // const  = evt.target.data;
    _.forEach(document.getElementsByClassName('chart-container'),(elementClass) => {
      elementClass.style.display = 'none';
    });
    _.forEach(document.getElementsByClassName('toggle-tab'),(elementClass) => {
      elementClass.className = 'toggle-tab tab-inactive';
    });

    const currentChart = document.getElementsByClassName(`chart-container-${value}`);
    evt.target.parentNode.className = 'toggle-tab tab-active';
    currentChart[0].childNodes[0].style.display = 'block';
  }
  render() {
    if (this.state.done) {
      return (
        <div className="center-content">
          <div className="charts-toggle-container">
            <h1>Statistics Overview</h1>
            <div className="toggle-control">
              <div className="toggle-tab tab-active">
                <span data-position="QB" onClick={this.handleClick}>
                  QUARTERBACKS
                </span>
              </div>
              <div className="toggle-tab tab-inactive">
                <span data-position="WR" onClick={this.handleClick}>
                  WIDE RECEIVERS
                </span>
              </div>
              <div className="toggle-tab tab-inactive">
                <span data-position="RB" onClick={this.handleClick}>
                  RUNNINGBACKS
                </span>
              </div>
              <div className="toggle-tab tab-inactive">
                <span data-position="TE" onClick={this.handleClick}>
                  TIGHT ENDS
                </span>
              </div>
            </div>
            <div className="charts-wrapper">
              <div className="chart-container-QB">
                <DoubleBarChart position={"QB"} positions={this.state.QB} />
              </div>
              <div className="chart-container-WR">
                <DoubleBarChart position={"WR"} positions={this.state.WR} />
              </div>
              <div className="chart-container-RB">
                <DoubleBarChart position={"RB"} positions={this.state.RB} />
              </div>
              <div className="chart-container-TE">
                <DoubleBarChart position={"TE"} positions={this.state.TE} />
              </div>
              <StatisticsTwitter />
            </div>
          </div>
          <sidebar className="compare-sidebar">
            <StatisticsComparePreview positions={this.state.QB} />
            <StatisticsComparePreview positions={this.state.RB} />
            <StatisticsComparePreview positions={this.state.WR} />
            <StatisticsComparePreview positions={this.state.TE} />
          </sidebar>
        </div>
      );
    }
    return (
      <div> QB Will Mount </div>
    );
  }
}

export default StatisticsOverview;
