import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const playerNames = ['Antonio Brown', 'Deandre Hopkins', 'Andrew Luck'];
    return (
      <div className="player-submit-btn">
        <input list="playerSearch"
          type="submit"
          className="button filter-form-select-button"
          value="Submit"
        />
      </div>
    );
  }
}
        // <datalist id="playerSearch">

        // </datalist>

export default connect()(PlayerSearchInput);
