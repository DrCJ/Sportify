import React from 'react';

const PlayerModalTableBodyRow = ({ week }) => (
  <tr>
    <td> {week.Week} </td>
    <td> {week.FantasyPointsYahoo} </td>
    <td> {week.Opponent} </td>
    <td> {week.PassingYards || week.RushingYards || week.ReceivingYards} </td>
    <td> {week.OffensiveTouchdowns + week.PassingTouchdowns + week.RushingTouchdowns} </td>
  </tr>
);

PlayerModalTableBodyRow.propTypes = {
  week: React.PropTypes.object,
};

export default PlayerModalTableBodyRow;
