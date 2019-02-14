import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function BookCardBody({ title, authors, children }) {
  return (
    <div className="book-card-body">
      <div className="book-title">{title}</div>
      <div className="book-authors">by {authors.join(", ")}</div>
      {children}
    </div>
  );
}

BookCardBody.defaultProps = {
  title: "Lorem Ipsom Dolour",
  authors: ["Unknown"]
};

BookCardBody.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string)
};

export default BookCardBody;
