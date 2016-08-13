import React from 'react';

export const PlayerModalTableBodyRow = ({ week }) => (
	<tr>
		<td> {week.Week} </td>
		<td> {week.FantasyPointsYahoo} </td>
		<td> {week.Opponent} </td>
		<td> {week.PassingYards || week.RushingYards || week.ReceivingYards} </td>
		<td> {week.OffensiveTouchdowns + week.PassingTouchdowns + week.RushingTouchdowns} </td>
	</tr>
);