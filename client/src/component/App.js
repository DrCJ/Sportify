import React, { Component } from 'react';
import YahooProfileImage from './../containers/YahooProfileImage.jsx';

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
        {this.props.children}
      </div>
    );
  }
}
