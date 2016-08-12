import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PlayerModal extends Component {
  render() {
    return (
      <div className="modal"> This is going to be the modal for the PlayerView </div>
    );
  }
}

export default connect(null, null)(PlayerModal);