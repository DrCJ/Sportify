import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import StatisticsComparePreviewList from './StatisticsComparePreviewList.jsx';

const StatisticsComparePreview = ({ positions }) => {
  console.log(positions);
  return (
  <div className="statistics-preview-container">
    <h3> Compare Preview </h3>
    <div className="statistics-preview-player-image">
      <div className="compare-preview-img">
        <img alt="player one name" src={positions.data.projected[0].image_url} />
      </div>
      <span className="compare-against">VS</span>
      <div className="compare-preview-img">
        <img alt="player one name" src={positions.data.projected[1].image_url} />
      </div>
    </div>
    <div className="statistics-preview-player-points">
      <p> {positions.data.projected[0].FantasyPointsYahoo} </p>
      <p> {positions.data.projected[1].FantasyPointsYahoo}</p>
    </div>
    <Link to="compare" className="statistics-preview-link"> View More! </Link>
            // Change this to an Link Router
  </div>
);
};


export default StatisticsComparePreview;
