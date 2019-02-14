import React from "react";
import PropTypes from "prop-types";

import Shelf from "./Shelf";
import BooksGrid from "./BooksGrid";
import GridItem from "./GridItem";
import BookCard from "../BookCard";

import "./styles.css";

function BookShelf({ books }) {
  return (
    <div className="book-shelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <Shelf>
        <BooksGrid>
          {books.map(b => (
            <GridItem>
              <BookCard book={b} />
            </GridItem>
          ))}
        </BooksGrid>
      </Shelf>
    </div>
  );
}

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BookShelf;
