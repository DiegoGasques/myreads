import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import BookCard from "./index";
import { books } from "../../testFixtures";

it("Should match the component snapshot", () => {
  const handleUpdateSpy = jest.fn();
  const wrapper = shallow(
    <BookCard
      book={books[0]}
      handleUpdate={handleUpdateSpy}
      className="dark-theme"
    />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should call handleUpdate with book and shelf value", () => {
  const handleUpdateSpy = jest.fn();
  const value = "currentlyReading";
  const wrapper = shallow(
    <BookCard
      book={books[2]}
      handleUpdate={handleUpdateSpy}
      className="dark-theme"
    />
  );
  wrapper.find("BookShelfChanger").prop("handleUpdate")(value);
  expect(handleUpdateSpy).toHaveBeenLastCalledWith(books[2], value);
});
