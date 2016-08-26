import React from 'react';
import { connect } from 'react-redux';

import { toggleNavigation } from './actions';

const Header = (props) => (
  <header className="header">
    <div className="center-content">
      <button onClick={props.toggleNavigation} type="button" className="menu-btn">
        <span />
        <span />
        <span />
        <span />
      </button>
      <div className="logo">
        <p className="logo-name">Sportify</p>
      </div>
      <div className="login-btn">
        <a href="/auth/yahoo">Yahoo Profile Login</a>
        <span> | </span>
        <a href="/logout">Logout</a>
      </div>
    </div>
  </header>
);

function mapStateToProps(state) {
  return { header: state.header };
}

Header.propTypes = {
  toggleNavigation: React.PropTypes.func,
};

export default connect(mapStateToProps, { toggleNavigation })(Header);
