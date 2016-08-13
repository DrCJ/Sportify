import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const ClickableHeading = (props) => (
  <td className="stat-heading">{props.name}</td>
);

export default ClickableHeading;
