import React from "react";
import PropTypes from "prop-types";

import BookShelf from "../BookShelf";
import OpenSearchBtn from "./OpenSearchBtn";

function fromStatusKeyToTitle(str) {
  return str
    .split(/(?<!^)(?=[A-Z])/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function HomePage({ books, keys, handleUpdate }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {Object.keys(keys).map(k => {
          return (
            <BookShelf
              key={k}
              title={fromStatusKeyToTitle(keys[k])}
              filteredBooks={books.filter(b => b.shelf === keys[k])}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
      <OpenSearchBtn />
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.object.isRequired
};

export default HomePage;
