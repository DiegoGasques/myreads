import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import SearchResults from "./index";

import { books } from "../../../testFixtures";

it("Should match SearchBar component snapshot", () => {
  const wrapper = shallow(<SearchResults results={books} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
