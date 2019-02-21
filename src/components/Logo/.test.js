import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Logo from "./index";

it("Should match Logo component snapshot without optional props", () => {
  const wrapper = shallow(<Logo text="Logo" path="/" />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should match Logo component snapshot with optional props", () => {
  const wrapper = shallow(
    <Logo text="Logo" path="/" className="great-logo" size="sm" />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
