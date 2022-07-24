import React from 'react';

const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count" data-testid="total-count">
        {totalCount}
      </span>
    </nav>
  );
};

export default Navbar;
