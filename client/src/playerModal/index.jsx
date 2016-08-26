import React from 'react';
import { connect } from 'react-redux';

import PlayerModalTable from './PlayerModalTable.jsx';
import PlayerModalInfo from './PlayerModalInfo.jsx';
import RadarChart from '../graph/RadarChart';


const PlayerModal = (props) => {
  if (!props.modal[0]) {
    return <div className="modal" />;
  }
  return (
    <div className="modal">
      {console.log('this is the modal: ', props.modal)}
      <div className="modal-header">
        {props.modal.length > 1 ? props.modal[0][0].full : 'none'}
      </div>
      <PlayerModalInfo modal={props.modal} />
      <div className="modal-schedule-info">
        <div className="modal-schedule-container">
          <PlayerModalTable modal={props.modal[0][0]} />
        </div>
      </div>
      <div className="radar-chart-modal">
        <RadarChart />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

PlayerModal.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(PlayerModal);
