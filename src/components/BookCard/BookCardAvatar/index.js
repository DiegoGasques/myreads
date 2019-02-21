import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function BookCardAvatar({ src }) {
  return (
    <div
      className="book-card-avatar"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

BookCardAvatar.defaultProps = {
  src: "https://via.placeholder.com/100x170"
};

BookCardAvatar.propTypes = {
  src: PropTypes.string
};

export default BookCardAvatar;
