import React from "react";
import { shallow, configure } from "../../../enzyme";
import ErrorPage from "./ErrorPage";


describe("<ErrorPage/>", () => {
  
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ErrorPage />);
    });
    it("should render", () => {
      expect(wrapper).toBeTruthy();
    });
  
  });
  