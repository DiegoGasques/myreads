import React from "react";
import * as BooksAPI from "../services/BooksAPI";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

import "./App.css";

export const AppContext = React.createContext();

class BooksApp extends React.Component {
  static keys = {
    shelf1: "currentlyReading",
    shelf2: "wantToRead",
    shelf3: "read"
  };

  state = {
    books: []
  };

  async componentDidMount() {
    let books = JSON.parse(window.localStorage.getItem("allBooks"));
    if (!books) {
      try {
        books = await BooksAPI.getAll();
      } catch (err) {
        return err;
      }
    }
    this.setState({ books });
  }

  componentDidUpdate() {
    window.localStorage.setItem("allBooks", JSON.stringify(this.state.books));
  }

  updateBookStatus = async (book, shelf) => {
    const { books } = this.state;
    let shelvesLen = 0;

    try {
      const shelves = await BooksAPI.update(book, shelf);
      for (let key in shelves) shelvesLen += shelves[key].length;

      if (shelvesLen === books.length) {
        this.setState({
          books: [...books.filter(b => b.id !== book.id), { ...book, shelf }]
        });
      } else if (shelvesLen < books.length) {
        this.setState({
          books: [...books.filter(b => b.id !== book.id)]
        });
      } else {
        this.setState({
          books: [...books, { ...book, shelf }]
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateBookStatus: this.updateBookStatus
        }}
      >
        <Router>
          <div className="app">
            <Route
              exact
              path="/"
              render={() => (
                <HomePage books={this.state.books} keys={BooksApp.keys} />
              )}
            />
            <Route path="/search" component={SearchPage} />
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default BooksApp;
