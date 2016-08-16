import Chart from 'chart.js';
import React, { Component } from 'react';
import axios from 'axios';

const overlayData = {
  labels: ['Adrian Peterson', 'Devonta Freeman', 'Jamaal Charles', 'Todd Gurley', 'Darren McFadden', 'David Johnson', 'Bo Jackson', 'Herschel Walker', 'Lavonte David', 'DeAngelo Williams'],
  datasets: [{
    label: '2015 Projected Points',
    type: 'bar',
    yAxesGroup: '1',
    backgroundColor: 'rgba(124,211,83,0.5)',
    borderColor: 'rgba(151,137,200,0.8)',
    // highlightFill: 'rgba(151,137,200,0.75)',
    highlightStroke: 'rgba(151,137,200,1)',
    data: [20, 18, 17, 16, 15.5, 14, 13, 12, 11, 10],
  }, {
    label: '2015 Actual Points',
    type: 'bar',
    yAxesGroup: '2',
    backgroundColor: 'rgba(217,113,64,0.5)',
    borderColor: 'rgba(151,187,205,0.8)',
    // highlightFill: 'rgba(151,187,205,0.75)',
    highlightStroke: 'rgba(151,187,205,1)',
    data: [11, 12.2, 9.6, 11.1, 10.1, 11, 9, 12, 10, 13],
  }],
  yAxes: [{
    name: '1',
    scalePositionLeft: false,
    scaleFontColor: 'rgba(151,137,200,0.8)',
  }, {
    name: '2',
    scalePositionLeft: true,
    scaleFontColor: 'rgba(151,187,205,0.8)',
  }],
};

const getChartData = (position, year, limit) => {
  year = year || 2015;
  position = position || 'RB';
  limit = limit || 10;
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
};

class DoubleBarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const ctx = document.getElementById('double-bar-chart-rb');
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: overlayData,
      // responsive: true,
      // maintainAspectRatio: false,
    });
  }

  render() {
    return (
      <div className="chart-container">
        <h5>2015 Projected Top 10 RBs</h5>
        <canvas id="double-bar-chart-rb" className="double-bar-chart"></canvas>
      </div>
    );
  }
}

export default DoubleBarChart;
