import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import SearchPage from "./index";

it("Should match SearchPage component snapshot", () => {
  const wrapper = shallow(<SearchPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
