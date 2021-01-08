import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar {renderBadge(totalCounters)}
      </a>
    </nav>
  );
};

const renderBadge = (totalCounters) => {
  if (totalCounters > 0)
    return (
      <span className="badge badge-pill badge-secondary ml-2">
        {totalCounters}
      </span>
    );
  return null;
};

export default NavBar;
