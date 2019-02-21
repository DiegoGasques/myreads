import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Shelf from "./index";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<Shelf>{() => []}</Shelf>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
