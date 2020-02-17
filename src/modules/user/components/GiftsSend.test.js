import React from "react";
import { shallow } from "../../../enzyme";
import { GiftsSend } from "./GiftsSend";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

describe("GiftsSend", () => {
  let wrapper, props;

  props = {
    data: [],
    classes: {
      root: "root"
    }
  };
  it("should render GiftReceived", () => {
    wrapper = shallow(<GiftsSend {...props} styles={styles} />);
  });
  expect(wrapper).toMatchSnapshot();
});