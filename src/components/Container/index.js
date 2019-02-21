import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
