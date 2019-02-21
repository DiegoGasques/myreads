import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import OpenSearchBtn from "./index";

it("Should match the component snapshot", () => {
  const wrapper = shallow(<OpenSearchBtn />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
