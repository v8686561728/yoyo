import React from "react";
import { shallow } from "../../../enzyme";
import { GiftsReceived } from "./GiftsReceived";

describe("GiftsReceived", () => {
  let wrapper, props;

  props = {
    data: [],
    classes: {
      root: "root"
    }
  };
  it("should render GiftReceived", () => {
    wrapper = shallow(<GiftsReceived {...props} />);
  });
  expect(wrapper).toMatchSnapshot();
});