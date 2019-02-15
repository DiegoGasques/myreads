import React from "react";
import PropTypes from "prop-types";

import Shelf from "./Shelf";
import BooksGrid from "./BooksGrid";
import GridItem from "./GridItem";
import BookCard from "../BookCard";

import "./styles.css";

function BookShelf({ filteredBooks, title, handleUpdate }) {
  return (
    <div className="book-shelf">
      <h2 className="bookshelf-title">{title}</h2>
      <Shelf>
        <BooksGrid>
          {filteredBooks.map(b => (
            <GridItem key={b.id}>
              <BookCard book={b} handleUpdate={handleUpdate} />
            </GridItem>
          ))}
        </BooksGrid>
      </Shelf>
    </div>
  );
}

BookShelf.propTypes = {
  filteredBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
};

export default BookShelf;
