import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PlayerModal extends Component {
  render() {
    console.log(this.props.modal.image_url);
    return (
      <div className="modal">
        <div className="modal-header"> This is going to be the Header </div>
        <div className="modal-player-info">
          <img src={this.props.modal.image_url || 'playerPic'} height="80px" width="100x"/>
          <span className="modal-player-bio">
            <ul>
              <li>{this.props.modal.full}</li>
              <li>{this.props.modal.Team}</li>
              <li>{this.props.modal.Position}</li>
            </ul>
          </span>
          <span> Season Stats </span>
        </div>
        <div className="modal-schedule-info">
          <div className="modal-schedule-container">
            <table className="modal-table">
              <thead>
                <tr>
                  <td> GP </td>
                  <td> Proj </td>
                  <td> Opp </td>
                  <td> Yds </td>
                  <td> TD </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr><tr>
                  <td> Week 1 </td>
                  <td> 2 </td>
                  <td> SEA </td>
                  <td> 200 </td>
                  <td> 2 </td>
                </tr>
              </tbody>
            </table>
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
