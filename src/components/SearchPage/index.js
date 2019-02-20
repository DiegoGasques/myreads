import React, { Component } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { SearchService } from "../../services/searchService";

import "./styles.css";

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.searchService = new SearchService();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.searchService.getResults().subscribe(results => {
      if (Array.isArray(results)) {
        this.setState(() => ({ results }));
      } else {
        this.setState(() => ({ results: [] }));
      }
    });
  }

  search = query => {
    this.searchService.search(query.trim());
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
