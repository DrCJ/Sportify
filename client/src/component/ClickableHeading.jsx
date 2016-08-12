import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const ClickableHeading = (props) => (
  <td className="stat-heading" onClick={console.log('clicked on:', props.name)}>{props.name}</td>
);

export default ClickableHeading;
