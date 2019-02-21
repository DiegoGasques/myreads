import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Hero from "./index";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<Hero />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
