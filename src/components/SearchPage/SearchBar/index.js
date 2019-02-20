import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

function SearchBar({ handleSearch }) {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          onKeyUp={e => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
