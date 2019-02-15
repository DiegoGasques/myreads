import React from "react";

import Card from "../Card";
import BookCardAvatar from "./BookCardAvatar";
import BookCardBody from "./BookCardBody";
import BookShelfChanger from "./BookShelfChanger";
import Ratings from "../StarRatings";
import PropTypes from "prop-types";

import "./styles.css";

function BookCard({ book, handleUpdate }) {
  return (
    <div className="book-card">
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
            currValue={book.shelf}
            handleUpdate={shelf => handleUpdate(book.id, shelf)}
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
