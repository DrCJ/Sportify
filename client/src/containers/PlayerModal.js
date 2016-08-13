import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { PlayerModalTable } from '../component/PlayerModalTable';
import { PlayerModalInfo } from '../component/PlayerModalInfo';

class PlayerModal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-header"> {this.props.modal.length > 1 ? this.props.modal[0].full : 'none'} </div>
        <PlayerModalInfo modal={this.props.modal[0] || []} />
        <div className="modal-schedule-info">
          <div className="modal-schedule-container">
            <PlayerModalTable modal={this.props.modal} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

// This will be nested in the model-schedule-info <div className="modal-player-notes-container">
          // </div><div className="modal-player-notes"> Player Notes </div>
// 
export default connect(mapStateToProps, null)(PlayerModal);
