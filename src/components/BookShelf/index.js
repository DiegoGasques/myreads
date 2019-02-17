import React, { Component } from "react";
import PropTypes from "prop-types";

import Shelf from "./Shelf";
import BooksGrid from "./BooksGrid";
import GridItem from "./GridItem";
import BookCard from "../BookCard";

import "./styles.css";

class BookShelf extends Component {
  state = {
    translate: 0
  };

  scrollRight = () => {
    this.setState(prevState => ({ translate: prevState.translate + 350 }));
  };

  render() {
    const { filteredBooks, title, handleUpdate } = this.props;
    return (
      <div className="book-shelf">
        <h2 className="book-shelf-title">{title}</h2>
        <Shelf>
          {handleOnDragStart => {
            return filteredBooks.map(b => (
              <BookCard
                onDragStart={handleOnDragStart}
                key={b.id}
                book={b}
                handleUpdate={handleUpdate}
              />
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
