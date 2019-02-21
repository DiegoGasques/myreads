import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import StarRatings from "./index";

it("Should match StarRatings component snapshot with avgRating prop", () => {
  const wrapper = shallow(<StarRatings avgRating={3.8} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should match StarRatings component snapshot without avgRating prop", () => {
  const wrapper = shallow(<StarRatings />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
