import React from 'react';
import teams from './teamNames';
import stadiums from './stadiumNames';

const teamOptions = [];
const stadiumOptions = [];
for (let k in teams) {
  teamOptions.push(<option key={k} value={k}>{teams[k]}</option>);
}
for (let j in stadiums) {
  stadiumOptions.push(<option key={j} value={j}>{j}</option>);
}

const filterCategories =
[
  {
    'Against a Team': teamOptions,
  },
  {
    'At Home/Away': {
      'HOME': 'Home',
      'AWAY': 'Away',
    },
  },
  {
    'When Started/Benched': {
      '0': 'Benched',
      '1': 'Started',
    },
  },
  {
    'At a Specific Stadium': stadiumOptions,
  },
  {
    'Playing Surface': {
      'Grass': 'Grass',
      'Artifical': 'Artifical',
      'Dome': 'Dome',
    },
  },
  {
    'On a Specific Day of the Week': {
      '4': 'Thursday',
      '6': 'Saturday',
      '0': 'Sunday',
      '1': 'Monday',
    },
  }
]

export default filterCategories;
