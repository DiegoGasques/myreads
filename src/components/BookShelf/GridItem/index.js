import React from "react";
import PropTypes from "prop-types";

function GridItem({ children }) {
  return <li className="grid-item">{children}</li>;
}

GridItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default GridItem;
