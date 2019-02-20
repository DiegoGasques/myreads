import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Error({ error, className, ...props }) {
  return (
    <div className={classNames("error", className)} {...props}>
      {error}
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Error;
