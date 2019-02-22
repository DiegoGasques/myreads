import React from "react";
import PropTypes from "prop-types";

import List from "../../List";
import BookCard from "../../BookCard";
import { AppContext } from "../../App";

import "./styles.css";

export function getBookInShelf(id, books) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) return books[i];
  }
  return null;
}

function SearchResults({ results }) {
  return (
    <div className="search-books-results">
      <AppContext.Consumer>
        {context => (
          <List>
            {results.map(b => {
              const bookFromShelf = getBookInShelf(b.id, context.state.books);
              return (
                <li key={`${b.id}`} className="list-item">
                  <BookCard
                    book={
                      bookFromShelf ? { ...b, shelf: bookFromShelf.shelf } : b
                    }
                    handleUpdate={context.updateBookStatus}
                  />
                </li>
              );
            })}
          </List>
        )}
      </AppContext.Consumer>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResults;
