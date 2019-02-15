import React from "react";
import * as BooksAPI from "../utils/BooksAPI";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

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
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                books={this.state.books}
                keys={BooksApp.keys}
                handleUpdate={this.updateBookStatus}
              />
            )}
          />
          <Route path="/search" component={SearchPage} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
