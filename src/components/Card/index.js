import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./styles.css";

function Card({ className, children }) {
  return <div className={classnames("card", className)}>{children}</div>;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;
