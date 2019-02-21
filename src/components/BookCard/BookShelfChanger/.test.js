import React from "react";
import { shallow } from "enzyme";
import BookShelfChanger from "./index";
import toJSON from "enzyme-to-json";
import { books } from "../../../testFixtures";

it("Should match the component snapshot", () => {
    const handleUpdate = jest.fn();
  const wrapper = shallow(<BookShelfChanger currValue="wantToRead" handleUpdate={handleUpdate} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("Should call handleUpdate on change event with right value", () => {
    const handleUpdateSpy = jest.fn();
    const value = 'currentlyReading';
    const wrapper = shallow(<BookShelfChanger currValue="wantToRead" handleUpdate={handleUpdateSpy} />);
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })
    expect(handleUpdateSpy).toHaveBeenLastCalledWith(value);
});