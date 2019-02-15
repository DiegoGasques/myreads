import React, { Component } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import * as BooksAPI from "../../utils/BooksAPI";
import "./styles.css";

class SearchPage extends Component {
  state = {
    results: []
  };

  search = query => {
    if (query) {
      BooksAPI.search(query)
        .then(results => this.setState({ results }))
        .catch(e => console.log(e));
    } else {
      this.setState({ results: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar handleSearch={this.search} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default SearchPage;
