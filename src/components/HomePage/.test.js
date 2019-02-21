import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import HomePage, { fromStatusKeyToTitle } from "./index";
import BooksApp from "../App";

import { books } from "../../testFixtures";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<HomePage books={books} keys={BooksApp.keys} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should test output given a shelf from book object", () => {
  const value = fromStatusKeyToTitle(books[0].shelf);
  expect(value).toBe("Currently Reading");
});
