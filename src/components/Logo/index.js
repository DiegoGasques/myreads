import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./styles.css";

function Logo({ text, className, path, size }) {
  return (
    <Link to={path}>
      <div className={classNames("logo", className)}>
        <h1 className={classNames({ md: !size })}>{text}</h1>
      </div>
    </Link>
  );
}

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Logo;
