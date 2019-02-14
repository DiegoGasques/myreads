import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function Shelf({ children }) {
  return <div className="shelf">{children}</div>;
}

Shelf.propTypes = {
  children: PropTypes.node
};

export default Shelf;
