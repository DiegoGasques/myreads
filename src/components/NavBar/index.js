import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function NavBar({ children }) {
  return <nav className="navbar">{children}</nav>;
}

NavBar.propTypes = {
  children: PropTypes.node
};

export default NavBar;
