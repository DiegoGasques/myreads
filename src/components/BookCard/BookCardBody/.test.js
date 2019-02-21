import React from "react";
import { shallow } from "enzyme";
import BookCardBody from "./index";
import toJSON from "enzyme-to-json";
import { books } from "../../../testFixtures";

it("Should match the component snapshot", () => {
  const { authors, title } = books[0];
  const wrapper = shallow(<BookCardBody title={title} authors={authors} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should render title and authors correctly", () => {
  const { authors, title } = books[0];
  const wrapper = shallow(<BookCardBody title={title} authors={authors} />);
  expect(wrapper.find(".book-title").text()).toBe(title);
  expect(wrapper.find(".book-authors").text()).toBe(`by ${authors.join(", ")}`);
});
