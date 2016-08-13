import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnePlayerModal } from '../actions/index';


class PlayerEntryView extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(playerId) {
		const playerIdArray = { playerId:[playerId] };
		this.props.getOnePlayerModal(playerIdArray);
	}
	render() {
		return ( 
      <tr>
        <td>
          <a
            onClick={this.handleClick.bind(this, this.props.player.playerId)}> {this.props.player.Name || this.props.player.full }
           </a>
        </td>
      	<td> {this.props.player.Position || 'NA'} </td>
      	<td> {this.props.player.Played || 0}</td>
      	<td> {this.props.player.Opponent || 'BYE'} </td>
      	<td> {this.props.player.FantasyPoints || 0}</td>
      	<td> Actual </td>
      	<td> {parseInt(this.props.player.PassingYards) || 0}</td>
      	<td> {this.props.player.PassingTouchdowns || 0}</td>
      	<td> {this.props.player.PassingInterceptions || 0}</td>
      	<td> {this.props.player.PassingAttempts || this.props.player.RushingAttempts || 0 }</td>
      	<td> {parseInt(this.props.player.RushingYards) || 0}</td>
      	<td> {this.props.player.RushingTouchdowns || 0}</td>
      	<td> {this.props.player.ReceivingTargets || 0}</td>
      	<td> {this.props.player.Receptions || 0} </td>
      	<td> {this.props.player.RushingTouchdowns || 0}</td>
      	<td> {this.props.player.ReceivingTouchdowns || 0}</td>
      	<td> {this.props.player.TwoPointConversionReturns || 0}</td>
      	<td> {this.props.player.PassingTouchdowns > 30 ? 'Approve' : 'Disapprove'} </td>
      </tr>
		);
	}
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

export default connect(mapStateToProps, { getOnePlayerModal })(PlayerEntryView);

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