import React from "react";
import PropTypes from "prop-types";

import NavBar from "../NavBar";
import Logo from "../Logo";
import Container from "../Container";
import Hero from "./Hero";
import BookShelf from "../BookShelf";
import OpenSearchBtn from "./OpenSearchBtn";

function fromStatusKeyToTitle(str) {
  return str
    .split(/(?<!^)(?=[A-Z])/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function HomePage({ books, keys, handleUpdate }) {
  return (
    <div className="list-books">
      <NavBar>
        <Container>
          <Logo path="/" text="MyReads" size="lg" />
        </Container>
      </NavBar>
      <Hero />
      <div className="list-books-content">
        <Container>
          {Object.keys(keys).map(k => {
            return (
              <BookShelf
                key={k}
                title={fromStatusKeyToTitle(keys[k])}
                filteredBooks={books.filter(b => b.shelf === keys[k])}
                handleUpdate={handleUpdate}
              />
            );
          })}
        </Container>
      </div>
      <OpenSearchBtn />
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.object.isRequired
};

export default HomePage;