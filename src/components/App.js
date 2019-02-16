import React from "react";
import * as BooksAPI from "../utils/BooksAPI";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

// Export the context so the data can be accessed from other files
const AppContext = React.createContext();

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
    const { books } = this.state;
    const book = books.find(b => b.id === id);

    if (book) {
      BooksAPI.update(id, shelf)
        .then(() => {
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
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      BooksAPI.get(id)
        .then(book =>
          this.setState(
            prevState => ({
              books: [...prevState.books, { ...book, shelf }]
            }),
            () =>
              window.localStorage.setItem(
                "allBooks",
                JSON.stringify(this.state.books)
              )
          )
        )
        .catch(e => console.log(e));
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
      </AppContext.Provider>
    );
  }
}

export { AppContext };
export default BooksApp;
