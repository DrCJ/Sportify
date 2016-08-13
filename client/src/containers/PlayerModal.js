import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { PlayerModalTable } from '../component/PlayerModalTable';
import { PlayerModalInfo } from '../component/PlayerModalInfo';

class PlayerModal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-header"> This is going to be the Header </div>
        <PlayerModalInfo modal={this.props.modal[0] || []} />
        <div className="modal-schedule-info">
          <div className="modal-schedule-container">
            <PlayerModalTable modal={this.props.modal} />
          </div>
          <div className="modal-player-notes-container">
            <div className="modal-player-notes"> Player Notes </div>
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

export default connect(mapStateToProps, null)(PlayerModal);
