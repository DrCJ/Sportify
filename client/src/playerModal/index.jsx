import React from 'react';
import { connect } from 'react-redux';

import PlayerModalTable from './PlayerModalTable.jsx';
import PlayerModalInfo from './PlayerModalInfo.jsx';

const PlayerModal = (props) => (
  <div className="modal">
    <div className="modal-header"> {props.modal.length > 1 ? props.modal[0].full : 'none'}
    </div>
    <PlayerModalInfo modal={props.modal[0] || []} />
    <div className="modal-schedule-info">
      <div className="modal-schedule-container">
        <PlayerModalTable modal={props.modal} />
      </div>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

PlayerModal.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(PlayerModal);
