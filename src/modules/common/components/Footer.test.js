import React from "react";
import { shallow, configure } from "../../../enzyme";
import Footer from "./Footer";
describe("<Footer/>", () => {
  const props = {
    className: "root"
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
  it("renders p tag with content", () => {
    const wrapper = shallow(<Footer {...props} />).dive();
    const test = wrapper.find("p").text();
    expect(test).toEqual("©2019 YoYo, Inc. All Rights Reserved.");
  });
});
