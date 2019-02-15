import React from "react";
import PropTypes from "prop-types";

import List from "../../List";
import BookCard from "../../BookCard";
import "./styles.css";

function SearchResults({ results }) {
  return (
    <div className="search-books-results">
      <List>
        {results.map(b => {
          return (
            <BookCard
              key={`results_${b.id}`}
              book={b}
              handleUpdate={console.log}
            />
          );
        })}
      </List>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResults;
