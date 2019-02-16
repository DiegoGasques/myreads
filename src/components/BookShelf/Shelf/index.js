import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-alice-carousel";

import "./styles.css";
import "react-alice-carousel/lib/alice-carousel.css";

class Shelf extends Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    950: { items: 3 },
    1324: { items: 4 }
  };

  handleOnDragStart = e => e.preventDefault();

  render() {
    const { children } = this.props;
    return (
      <Carousel
        mouseDragEnabled
        items={children(this.handleOnDragStart)}
        responsive={this.responsive}
      />
    );
  }
}

Shelf.propTypes = {
  children: PropTypes.node
};

export default Shelf;
