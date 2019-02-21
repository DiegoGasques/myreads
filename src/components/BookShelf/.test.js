import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import BookShelf from "./index";
import { books } from "../../testFixtures";

it("Should match the component snapshot", () => {
  const wrapper = shallow(
    <BookShelf title="currentlyReading" filteredBooks={[books[0], books[1]]} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
