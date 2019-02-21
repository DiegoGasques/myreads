import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import SearchBar from "./index";

it("Should match SearchBar component snapshot", () => {
  const handleSearchSpy = jest.fn();
  const wrapper = shallow(<SearchBar handleSearch={handleSearchSpy} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should call handleSearch prop func on input keyUp event with right value", () => {
  const value = "travel";
  const handleSearchSpy = jest.fn();
  const wrapper = shallow(<SearchBar handleSearch={handleSearchSpy} />);
  wrapper.find("input").simulate("keyUp", {
    target: {
      value
    }
  });
  expect(handleSearchSpy).toHaveBeenCalledWith(value);
});
