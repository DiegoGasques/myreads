import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Card from "../Card";
import BookCardAvatar from "./BookCardAvatar";
import BookCardBody from "./BookCardBody";
import BookShelfChanger from "./BookShelfChanger";
import Ratings from "../StarRatings";

import "./styles.css";

function BookCard({ book, handleUpdate, className }) {
  return (
    <div className={classNames("book-card", className)}>
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
  book: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default BookCard;
