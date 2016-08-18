import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnePlayerModal } from './actions';


class PlayerEntryView extends Component {
  constructor(props) {
		super(props);
	}

  handleClick(playerId) {
    const playerIdArray = { playerId:[playerId] };
    this.props.getOnePlayerModal(playerIdArray);
    document.getElementsByClassName('shadow-modal')[0].className = ('shadow-modal-click');
    document.getElementsByClassName('modal')[0].className = ('modal-click');
	}
  render() {
    const headings = this.props.headings;
    const tableInfo = [];
    for (let i = 1; i < headings.length - 1; i++) {
      tableInfo[i] = <td key={i + 1}> {this.props.player[headings[i]] || 0}</td>
    }
    return (
			<tr>
				<td> <a onClick={this.handleClick.bind(this, this.props.player.playerId)}> {this.props.player[headings[0]] || this.props.player.full }</a></td>
        {tableInfo}
				<td> {this.props.player.FantasyPointsYahoo > 250 ? '👍' : '👎'} </td>
			</tr>
		);
	}
}

//  It would be nice if we could map 'default values... perhaps using a lookup table like abbreviations'
/* <td> {this.props.player[headings[1]] || 'NA'} </td>
<td> {this.props.player[headings[2]] || 0}</td>
<td> {this.props.player[headings[3]] || 'BYE'} </td>
<td> {this.props.player[headings[4]] || 0}</td>
<td> {this.props.player[headings[5]] || 0}</td>
<td> {this.props.player[headings[6]] || 0}</td>
<td> {this.props.player[headings[7]] || 0}</td>
<td> {this.props.player[headings[8]] || 0}</td>
<td> {this.props.player[headings[9]] || 0}</td>
<td> {this.props.player.RushingYards || 0}</td>
<td> {this.props.player.RushingTouchdowns || 0}</td>
<td> {this.props.player.ReceivingTargets || 0}</td>
<td> {this.props.player.Receptions || 0} </td>
<td> {this.props.player.RushingTouchdowns || 0}</td>
<td> {this.props.player.ReceivingTouchdowns || 0}</td>
<td> {this.props.player.TwoPointConversionReturns || 0}</td>
*/

function mapStateToProps(state) {
  return {
    modal: state.modal,
    headings: state.search.headings,
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
