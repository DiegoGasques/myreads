import React from "react";
import PropTypes from "prop-types";
import Ratings from "react-ratings-declarative";

import "./styles.css";

function StarRatings({ avgRating }) {
  return avgRating ? (
    <div className="star-rating">
      <Ratings
        rating={avgRating}
        widgetDimensions="13px"
        widgetSpacings="0.1px"
        widgetRatedColors="#f8ce0b"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
      <span style={{ fontWeight: "bold" }}> {`${avgRating}`}</span> avg. rating
    </div>
  ) : null;
}

Ratings.propTypes = {
  avgRating: PropTypes.number
};

export default StarRatings;
