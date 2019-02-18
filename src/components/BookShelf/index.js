import React, { Component } from "react";
import PropTypes from "prop-types";

import Shelf from "./Shelf";
import BookCard from "../BookCard";
import { AppContext } from "../App";

import "./styles.css";

class BookShelf extends Component {
  render() {
    const { filteredBooks, title } = this.props;
    return (
      <div className="book-shelf">
        <h2 className="book-shelf-title">{title}</h2>
        <Shelf>
          {handleOnDragStart => {
            return filteredBooks.map(b => (
              <AppContext.Consumer>
                {context => (
                  <BookCard
                    onDragStart={handleOnDragStart}
                    key={b.id}
                    book={b}
                    handleUpdate={context.updateBookStatus}
                  />
                )}
              </AppContext.Consumer>
            ));
          }}
        </Shelf>
      </div>
    );
  }
}

BookShelf.propTypes = {
  filteredBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
};

export default BookShelf;
