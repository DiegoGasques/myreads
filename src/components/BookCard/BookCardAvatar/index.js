import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function BookCardAvatar({ src }) {
  return (
    <div
      className="book-card-avatar"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

BookCardAvatar.defaultProps = {
  src: "https://via.placeholder.com/100x170"
};

//"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"

BookCardAvatar.propTypes = {
  src: PropTypes.string
};

export default BookCardAvatar;
