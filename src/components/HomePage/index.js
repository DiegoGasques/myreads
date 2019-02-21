import React from "react";
import PropTypes from "prop-types";

import NavBar from "../NavBar";
import Logo from "../Logo";
import Container from "../Container";
import Hero from "./Hero";
import BookShelf from "../BookShelf";
import OpenSearchBtn from "./OpenSearchBtn";

import "./styles.css";

export function fromStatusKeyToTitle(str) {
  return str
    .split(/(?<!^)(?=[A-Z])/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function HomePage({ books, keys }) {
  return (
    <div className="list-books">
      <NavBar>
        <Logo path="/" text="MyReads" size="md" />
      </NavBar>
      <Container>
        <Hero />
      </Container>

      <div className="list-books-content">
        <Container>
          {Object.keys(keys).map(k => {
            return (
              <BookShelf
                key={k}
                title={fromStatusKeyToTitle(keys[k])}
                filteredBooks={books.filter(b => b.shelf === keys[k])}
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
