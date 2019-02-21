import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import BookApp from "./app";

it("Should match BookApp component snapshot", () => {
  const wrapper = shallow(<BookApp />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
