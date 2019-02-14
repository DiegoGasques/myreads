import React from "react";

import Card from "../Card";
import BookCardAvatar from "./BookCardAvatar";
import BookCardBody from "./BookCardBody";
import BookShelfChanger from "./BookShelfChanger";
import Ratings from "../StarRatings";
import PropTypes from "prop-types";

import "./styles.css";

function BookCard({ book }) {
  return (
    <div>
      <Card>
        <BookCardAvatar src={book.imageLinks.thumbnail} />
        <BookCardBody title={book.title} authors={book.authors}>
          <Ratings avgRating={book.averageRating} />
          <BookShelfChanger
            currValue={book.shelf}
            handleUpdate={value => console.log(value)}
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
