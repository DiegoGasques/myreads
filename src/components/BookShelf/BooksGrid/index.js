import React from "react";
import PropTypes from "prop-types";

import List from "../../List";
import "./styles.css";

function BooksGrid({ children }) {
  return <List className="books-grid-list">{children}</List>;
}

BooksGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default BooksGrid;
