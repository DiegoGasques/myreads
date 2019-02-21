import React from "react";
import { shallow } from "enzyme";
import BookCardAvatar from "./index";
import toJSON from "enzyme-to-json";
import { books } from "../../../testFixtures";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<BookCardAvatar />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should match the default image as background", () => {
  const wrapper = shallow(<BookCardAvatar />);
  expect(wrapper.props().style).toEqual({
    backgroundImage: `url(https://via.placeholder.com/100x170)`
  });
});

it("Should match the src image passed as prop", () => {
  const src = books[0].imageLinks.thumbnail;
  const wrapper = shallow(<BookCardAvatar src={src} />);
  expect(wrapper.props().style).toEqual({
    backgroundImage: `url(${src})`
  });
});
