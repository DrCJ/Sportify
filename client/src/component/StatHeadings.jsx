import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ClickableHeading from './ClickableHeading.jsx';

const StatHeadings = () => {
  const headings = [
    'Offense',
    'Position',
    'GP*',
    'Opp',
    'Proj',
    'Actual',
    'Yds',
    'TD',
    'Int',
    'Att*',
    'Yds',
    'TD',
    'Tgt*',
    'Rec',
    'RshTD',
    'RecTD',
    '2PT',
    'Carlos ',
  ];

  const mapHeadings = headings.map(val => (<ClickableHeading name={val} />));
  return (
    <thead>
      <tr>
        {mapHeadings}
      </tr>
    </thead>
  );
};

export default StatHeadings;
