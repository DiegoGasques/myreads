import React from "react";
import * as BooksAPI from "../utils/BooksAPI";

import "./App.css";
import HomePage from "./HomePage";

class BooksApp extends React.Component {
  static keys = {
    shelf1: "currentlyReading",
    shelf2: "wantToRead",
    shelf3: "read"
  };

  state = {
    showSearchPage: false,
    books: []
  };

  async componentDidMount() {
    let books = JSON.parse(window.localStorage.getItem("allBooks"));

    if (!books) {
      try {
        books = await BooksAPI.getAll();
      } catch (err) {
        console.log(err);
      }
    }

    this.setState({ books });
  }

  updateBookStatus = async (id, shelf) => {
    const book = this.state.books.find(b => b.id === id);

    try {
      await BooksAPI.update(book, shelf);
      this.setState(
        prevState => ({
          books: [
            ...prevState.books.filter(b => b.id !== id),
            { ...book, shelf }
          ]
        }),
        () =>
          window.localStorage.setItem(
            "allBooks",
            JSON.stringify(this.state.books)
          )
      );
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    BooksAPI.getAll().then(books => console.log(books));
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <HomePage
            books={this.state.books}
            keys={BooksApp.keys}
            handleUpdate={this.updateBookStatus}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
