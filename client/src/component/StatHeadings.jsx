import React from 'react';
import ClickableHeading from '../containers/ClickableHeading.jsx';
import abbreviations from '../helpers/mapStatToAbbreviation';

const headings = [

  'Name',
  'Position',
  'Played',
  'Opponent',

  //  Fan Pts
  'FantasyPointsYahoo',
  'FantasyPointsPPR',

  //  Passing
  'PassingYards',
  'PassingCompletions',
  'PassingTouchdowns',
  'PassingInterceptions',

  //  Rushing
  'RushingYards',
  'RushingTouchdowns',

  //  Recieving
  'ReceivingYards',
  'Receptions',
  'ReceivingTouchdowns',

  //  Misc
  // '2PT',  -> 2PT is split into multiple db fields
  'TwoPointConversionPasses',
  'Fumbles',
  'Carlos',
].map(val => {
  return {
    fieldName: val,
    name: abbreviations[val],
  };
});

console.log('HEADINGS:', headings);

const StatHeadings = () => {

  const mapHeadings = headings.map((val, i) => (<ClickableHeading key={i} {...val} />));
  return (
    <thead>
      <tr>
        <td colSpan="4" />
        <td colSpan="2">Fan Pts</td>
        <td colSpan="4">Passing</td>
        <td colSpan="2">Rushing</td>
        <td colSpan="3">Receiving</td>
        <td colSpan="3">Misc</td>
      </tr>
      <tr>
        {mapHeadings}
      </tr>
    </thead>
  );
};

export default StatHeadings;
