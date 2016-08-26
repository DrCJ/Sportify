import Chart from 'chart.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerTweets } from './actions';

class DoubleBarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlayerTweets(["CameronNewton", "http://l.yimg.com/iu/api/res/1.2/hC3SL6U55jv3yN9l3iegmQ--/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/20141101/24788.png"])
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
          backgroundColor: 'rgba(90,107,43,0.7)',
          borderColor: 'rgba(151,137,200,0.8)',
          // highlightFill: 'rgba(151,137,200,0.75)',
          highlightStroke: 'rgba(151,137,200,1)',
          data: [20, 18, 17, 16, 15.5, 14, 13, 12, 11, 10],
        },
        {
          label: '2015 Actual Points',
          type: 'bar',
          yAxesGroup: '2',
          backgroundColor: 'rgba(122,63,55,0.7)',
          borderColor: 'rgba(151,187,205,0.8)',
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
