import React from "react";

import Card from "../Card";
import BookCardAvatar from "./BookCardAvatar";
import BookCardBody from "./BookCardBody";
import BookShelfChanger from "./BookShelfChanger";
import Ratings from "../StarRatings";
import PropTypes from "prop-types";

import "./styles.css";

function BookCard({ book, handleUpdate, ...props }) {
  return (
    <div className="book-card" {...props}>
      <Card>
        <BookCardAvatar
          src={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "https://via.placeholder.com/100x170"
          }
        />
        <BookCardBody title={book.title} authors={book.authors}>
          <Ratings avgRating={book.averageRating} />
          <BookShelfChanger
            currValue={book.shelf || "none"}
            handleUpdate={shelf => handleUpdate(book, shelf)}
          />
        </BookCardBody>
      </Card>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookCard;
