import React from "react";
import PropTypes from "prop-types";

import BookShelf from "../BookShelf";

function HomePage({ books, keys }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(keys).map(k => {
            return (
              <BookShelf
                key={k}
                books={books.filter(b => b.shelf === keys[k])}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.object.isRequired
};

export default HomePage;
