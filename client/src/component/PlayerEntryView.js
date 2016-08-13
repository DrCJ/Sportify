import React from 'react';
import { Link } from 'react-router';

export const PlayerEntryView = ({ player }) => (
	<tr>
		<td> <a onClick={() => console.log(player.id)}> {player.Name || player.full }</a></td>
		<td> {player.Position || 'NA'} </td>
		<td> {player.Played || 0}</td>
		<td> {player.Opponent || 'BYE'} </td>
		<td> {player.FantasyPoints || 0}</td>
		<td> Actual </td>
		<td> {parseInt(player.PassingYards) || 0}</td>
		<td> {player.PassingTouchdowns || 0}</td>
		<td> {player.PassingInterceptions || 0}</td>
		<td> {player.PassingAttempts || player.RushingAttempts || 0 }</td>
		<td> {parseInt(player.RushingYards) || 0}</td>
		<td> {player.RushingTouchdowns || 0}</td>
		<td> {player.ReceivingTargets || 0}</td>
		<td> {player.Receptions || 0} </td>
		<td> {player.RushingTouchdowns || 0}</td>
		<td> {player.ReceivingTouchdowns || 0}</td>
		<td> {player.TwoPointConversionReturns || 0}</td>
		<td> {player.PassingTouchdowns > 30 ? 'Approve' : 'Disapprove'} </td>
	</tr>
);

// Action.payload.data[0] = [{
// Object.Played = GP
// Object.FantasyPoints = PROJ
// Object.PassingYards + Object.RushingYards = Yds
// Object.PassingCompletions = PassComp
// Object.PassingCompletionPercentage = Comp%
// Object.PassingInterceptions = Int
// Object.PassingAttempts = Att*
// Object.PassingTouchdowns = TD (Passing)
// Object.TwoPointConversionReturns = 2PT
// Object.status = Availability
// Object.Opponent = Opponent
// Object.Position = Position
// }]