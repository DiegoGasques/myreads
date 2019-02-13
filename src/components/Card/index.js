import React from "react";
import classnames from "classnames";

import "./styles.css";

function Card({ className, children }) {
  return <div className={classnames("card", className)}>{children}</div>;
}

export default Card;
