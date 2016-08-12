import React, { Component } from 'react';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';

export default class Compare extends Component {
  render() {
    return (
      <div className='center-content'>
        <ComparePlayerHeadshots/>
        <ComparePlayerStats/>
      </div>
		);
  }
}
