import React, { Component } from 'react';

export default class YahooProfileImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <a href="/auth/yahoo"> Login
      </a>
    );
  }
}
