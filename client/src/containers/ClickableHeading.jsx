import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterPlayers } from '../actions';

class ClickableHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,  //prevents triggering click event twice, sending 2 requests (causes an error)
    };
  }

  componentWillMount() {
    this.setState({ clicked: false });
  }

  clickHandler() {
    if (!this.state.clicked) {
      console.log('clicked on ', this.props.fieldName, this.props.name);
      this.props.filterPlayers({ orderBy: this.props.fieldName });
    }
  }

  render() {
    return (
      <td className="stat-heading" onClick={this.clickHandler}>{this.props.name}</td>
    );
  }
}

ClickableHeading.propTypes = {
  name: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  filterPlayers: PropTypes.function.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    filterPlayers: (obj) => dispatch(filterPlayers(obj)),
  };
}

export default connect(mapDispatchToProps)(ClickableHeading);
