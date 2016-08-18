import Chart from 'chart.js';
import React, { Component } from 'react';
import axios from 'axios';

const getChartData = (position, year, limit) => {
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
    const overlayData = {
      labels: [
        'Adrian Peterson', 'Devonta Freeman', 'Jamaal Charles', 'Todd Gurley',
        'Darren McFadden', 'David Johnson', 'Bo Jackson', 'Herschel Walker', 'Lavonte David',
        'DeAngelo Williams',
      ],
      datasets: [
        {
          label: '2016 Projected Points',
          type: 'bar',
          yAxesGroup: '1',
          backgroundColor: 'rgba(124,211,83,0.5)',
          borderColor: 'rgba(151,137,200,0.8)',
          // highlightFill: 'rgba(151,137,200,0.75)',
          highlightStroke: 'rgba(151,137,200,1)',
          data: [20, 18, 17, 16, 15.5, 14, 13, 12, 11, 10],
        },
        {
          label: '2015 Actual Points',
          type: 'bar',
          yAxesGroup: '2',
          backgroundColor: 'rgba(217,113,64,0.5)',
          borderColor: 'rgba(151,187,205,0.8)',
          // highlightFill: 'rgba(151,187,205,0.75)',
          highlightStroke: 'rgba(151,187,205,1)',
          data: [11, 12.2, 9.6, 11.1, 10.1, 11, 9, 12, 10, 13],
        }
      ],
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

    let ctx = document.getElementById(`double-bar-chart-${this.props.position}`);

    getChartData(this.props.position)
      .then(response => {
        console.log('response:', response.data);

        const names = response.data.projected.map(player => player.Name);
        overlayData.labels = names;

        const projData = response.data.projected.map(player => player.FantasyPointsYahoo);
        const actualData = response.data.actual.map(player => player.FantasyPointsYahoo);

        overlayData.datasets[0].data = projData;
        overlayData.datasets[1].data = actualData;

        let myChart = new Chart(ctx, {
          type: 'bar',
          data: overlayData,
        });
      });
  }

  render() {
    return (
      <div className="chart-container">
        <h5>2016 Projected Top 20 {this.props.position}s</h5>
        <canvas id={`double-bar-chart-${this.props.position}`} ></canvas>
      </div>
    );
  }
}

export default DoubleBarChart;
