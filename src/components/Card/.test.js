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

it("Should have the right className prop", () => {
  const wrapper = shallow(
    <Card className="primary-lg">
      <h1>Test</h1>
    </Card>
  );

  expect(wrapper.prop("className")).toBe("card primary-lg");
});
