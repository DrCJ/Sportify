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
        <a href="/auth/yahoo">
          <img className="login-img" width="60" src="http://vignette3.wikia.nocookie.net/logopedia/images/8/84/Yahoo%21_18_Favicon.png/revision/latest?cb=20130825034903" alt="Yahoo logo" />
        </a>
        <a className="logout-btn" href="/logout">Logout</a>
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
