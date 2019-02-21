import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Container from "./index";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<Container />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
