import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="main-header__name">
          <NavLink to="/article">
            SHARETRADE.<span className="main-header__name-domen">COM</span>
          </NavLink>
        </h1>
      </div>
    </header>
  );
}

export default Header;