import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import NavBar from "./index";

it("Should match NavBar component snapshot with children", () => {
  const wrapper = shallow(
    <NavBar>
      <h1>Navbar</h1>
    </NavBar>
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
