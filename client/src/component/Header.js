import React from 'react';
import { Link } from 'react-router';

export const Header = () => (
	<div>
    <div className="menu-btn">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="logo">
      <img src="" alt="SOME RANDOM LOGO" />
    </div>

    <div className="login-btn">
    	<Link to="/YahooProfile"> <div> Yahoo Profile Login </div> </Link>
    </div>
  </div>
);
