import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="header">
      {/* <div className="logo-link"> */}
        <Link className="nav-logo-link" to="/search">
        </Link>
      {/* </div> */}
    </header>
  );
};

export default Nav;