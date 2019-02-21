import React from "react";
import { shallow } from "enzyme";
import BookCardAvatar from "./index";
import toJSON from "enzyme-to-json";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<BookCardAvatar />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
