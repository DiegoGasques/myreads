import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import List from "./index";

it("Should match the component snapshot", () => {
  const wrapper = shallow(
    <List className="row">
      <li>Child</li>
      <li>Child</li>
    </List>
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
