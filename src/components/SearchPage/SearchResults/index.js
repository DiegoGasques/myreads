import React from "react";
import PropTypes from "prop-types";

import List from "../../List";
import BookCard from "../../BookCard";
import { AppContext } from "../../App";

import "./styles.css";

function SearchResults({ results }) {
  return (
    <div className="search-books-results">
      <AppContext.Consumer>
        {context => (
          <List>
            {results.map(b => {
              return (
                <li key={`${b.id}`} className="list-item">
                  <BookCard book={b} handleUpdate={context.updateBookStatus} />
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
