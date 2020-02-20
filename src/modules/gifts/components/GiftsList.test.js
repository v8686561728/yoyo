import React from "react";
import { shallow } from "../../../enzyme";
import { GiftsList } from "./GiftsList";

describe("GiftsList", () => {
  let wrapper, props;

  props = {
    giftCardsFiltered: [{ id: 1 }],
    classes: {
      root: "root"
    },
    userDetails: {
      email: "yoyogiftg2@gmail.com"
    },
    handleUpdateClick: jest.fn()
  };
  let props2 = {
    giftCardsFiltered: [{ id: 1 }],
    classes: {
      root: "root"
    },
    userDetails: {
      email: "test@gmail.com"
    },
    handleUpdateClick: jest.fn()
  };
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props2} />);
    expect(wrapper).toBeTruthy();
  });
  it("should render autoSizer function", () => {
    wrapper = shallow(<GiftsList {...props2} />);
    expect(wrapper.instance().autoSizer("height","width"))
  });
});