import React from "react";
import { shallow } from "enzyme";
import BookCardAvatar from "./index";
import toJSON from "enzyme-to-json";

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
