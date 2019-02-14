import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function BookShelfChanger({ handleUpdate, currValue }) {
  return (
    <div className="book-shelf-changer-2">
      <select value={currValue} onChange={e => handleUpdate(e.target.value)}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  handleUpdate: PropTypes.func.isRequired
};

export default BookShelfChanger;
