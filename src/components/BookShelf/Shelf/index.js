import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import "./styles.css";

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
      <div className="shelf">
        <i class="fas fa-angle-left" />
        <Carousel
          mouseDragEnabled
          items={children(this.handleOnDragStart)}
          responsive={this.responsive}
        />
        <i class="fas fa-angle-right" />
      </div>
    );
  }
}

Shelf.propTypes = {
  children: PropTypes.node
};

export default Shelf;
