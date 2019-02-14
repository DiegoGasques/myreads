import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

function List({ className, children }) {
  return <ul className={classNames("list", className)}>{children}</ul>;
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default List;
