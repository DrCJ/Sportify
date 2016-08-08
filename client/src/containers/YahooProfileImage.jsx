import React, { Component } from 'react';

export default class YahooProfileImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      tempTableData: [{ name: { first: 'jay', last: 'arella' } }],
    };
  }

  componentDidMount() {
    fetch('/test')
      .then((data) => { return data.json() })
      .then((tempTableData) => { this.setState({ tempTableData }); console.log(tempTableData) });
  }

  render() {
    return (
      <div>
        <a href="/auth/yahoo"> Login
        </a>
        <ul>
          {
            this.state.tempTableData.map((player, index) => {
              return <li key={index}>{player.name.first} {player.name.last}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
