import React, { Component } from 'react';
import YahooProfileImage from './../containers/YahooProfileImage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div> Hello World
        <YahooProfileImage />
      </div>
    );
  }
}
