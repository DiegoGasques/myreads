import React from "react";
import Card from "./index";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

it("Should match snapshot", () => {
  const wrapper = shallow(
    <Card>
      <h1>Test</h1>
    </Card>
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
