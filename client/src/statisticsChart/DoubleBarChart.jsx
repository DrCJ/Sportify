import Chart from 'chart.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getPlayerTweets, getTop20Players } from './actions';

// const getChartData = (position, year, limit) => {
//   const request = axios({
//     method: 'post',
//     url: '/api/getProjectedVsActual',
//     data: {
//       position,
//       year,
//       limit,
//     },
//     header: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return request;
// };

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

        console.log(this.props.positions.data);
        const twitterNames = [];
        const twitterImgs = [];
        const projData = [];
        const names = this.props.positions.data.projected.map(player => {
          projData.push(player.FantasyPointsYahoo);
          twitterNames.push(player.twitterID);
          twitterImgs.push(player.image_url);
          return player.Name;
        });
        overlayData.labels = names;
        const actualData = this.props.positions.data.actual.map(player => player.FantasyPointsYahoo);

        overlayData.datasets[0].data = projData;
        overlayData.datasets[1].data = actualData;

        const myChart = new Chart(ctx, {
          type: 'bar',
          data: overlayData,
        });

        myChart.chart.canvas.onclick = e => {
          const data = myChart.getElementsAtEvent(e);
          if (data[0]) {
            const twitterHandle = twitterNames[data[0]._index];
            const twitterImg = twitterImgs[data[0]._index];
            this.props.getPlayerTweets([twitterHandle, twitterImg]);
          }
        };
  }

  render() {
    return (
      <div className="chart-container">
        <h5>2016 Projected Top 20 {this.props.position}s</h5>
        <canvas id={`double-bar-chart-${this.props.position}`} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerTweets: state.playerTweets,
  };
}

export default connect(mapStateToProps, { getPlayerTweets })(DoubleBarChart);
